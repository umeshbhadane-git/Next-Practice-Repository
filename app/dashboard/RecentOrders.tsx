async function getRecentOrders() {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );

  return [
    {
      id: "ORD-101",
      product: "Laptop",
      amount: 75000,
    },
    {
      id: "ORD-102",
      product: "Keyboard",
      amount: 3000,
    },
    {
      id: "ORD-103",
      product: "Mouse",
      amount: 1500,
    },
  ];
}

export default async function RecentOrders() {
  const orders = await getRecentOrders();

  return (
    <div className="widget">
      <h2>Recent Orders</h2>

      {orders.map((order) => (
        <div key={order.id} className="order">
          <span>{order.id}</span>
          <span>{order.product}</span>
          <strong>₹{order.amount}</strong>
        </div>
      ))}
    </div>
  );
}