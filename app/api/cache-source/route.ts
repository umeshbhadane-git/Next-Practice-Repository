let callCount = 0;

export async function GET() {
  callCount++;

  const now = new Date().toISOString();

  console.log(
    `CACHE SOURCE CALLED → count=${callCount}, time=${now}`
  );

  return Response.json({
    callCount,
    timestamp: now,
    products: [
      {
        id: 1,
        name: "Laptop",
        price: 75000,
      },
      {
        id: 2,
        name: "Keyboard",
        price: 2500,
      },
      {
        id: 3,
        name: "Mouse",
        price: 1200,
      },
    ],
  });
}