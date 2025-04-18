import fs from "node:fs/promises";

interface User {
  credentials: {
    username: string;
    passphrase: string;
  };
}

export default defineLazyEventHandler(async () => {
  const users: User[] = JSON.parse(await fs.readFile("users.json", "utf-8"));

  const creds = new Map();
  for (const user of users) {
    creds.set(user.credentials.username, user.credentials.passphrase);
  }

  return defineEventHandler(async (event) => {
    const { username, password } = await readBody(event);
    // Replace with your own user validation logic
    const maybePassword: string | undefined = creds.get(username);
    if (password === maybePassword) {
      const token = "yes";
      return { success: true, token };
    }
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid credentials",
    });
  });
});
