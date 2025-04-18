interface Product {
  id: number;
  status: string;
  date_created: number;
  name: string;
  price: number;
}

export default defineEventHandler(async () => {
  const data: Product[] = [
    { id: 0, status: "OK", date_created: Date.now() + 1, name: "a", price: 0 },
    { id: 1, status: "OK", date_created: Date.now() + 2, name: "b", price: 0 },
    { id: 2, status: "OK", date_created: Date.now() + 3, name: "c", price: 0 },
    { id: 3, status: "OK", date_created: Date.now() + 4, name: "d", price: 0 },
    { id: 4, status: "OK", date_created: Date.now() + 5, name: "e", price: 0 },
    { id: 5, status: "OK", date_created: Date.now() + 6, name: "f", price: 0 },
    { id: 6, status: "OK", date_created: Date.now() + 7, name: "g", price: 0 },
    { id: 7, status: "OK", date_created: Date.now() + 8, name: "h", price: 0 },
    { id: 8, status: "OK", date_created: Date.now() + 9, name: "i", price: 0 },
    { id: 9, status: "OK", date_created: Date.now() + 10, name: "j", price: 0 },
  ];
  return data;
});
