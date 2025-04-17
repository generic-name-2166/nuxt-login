interface Product {
  id: number;
  status: string;
  date_created: Date;
  name: string;
  price: number;
}

export default defineEventHandler(async () => {
  const data: Product[] = [
    { id: 0, status: "OK", date_created: new Date(), name: "a", price: 0 },
    { id: 1, status: "OK", date_created: new Date(), name: "a", price: 0 },
    { id: 2, status: "OK", date_created: new Date(), name: "a", price: 0 },
    { id: 3, status: "OK", date_created: new Date(), name: "a", price: 0 },
    { id: 4, status: "OK", date_created: new Date(), name: "a", price: 0 },
    { id: 5, status: "OK", date_created: new Date(), name: "a", price: 0 },
    { id: 6, status: "OK", date_created: new Date(), name: "a", price: 0 },
    { id: 7, status: "OK", date_created: new Date(), name: "a", price: 0 },
    { id: 8, status: "OK", date_created: new Date(), name: "a", price: 0 },
    { id: 9, status: "OK", date_created: new Date(), name: "a", price: 0 },
  ];
  return data;
});
