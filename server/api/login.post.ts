export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event);
  // Replace with your own user validation logic
  if (username === "admin" && password === "password") {
    // Set session or return token as needed
    return { success: true };
  }
  throw createError({ statusCode: 401, statusMessage: "Invalid credentials" });
});
