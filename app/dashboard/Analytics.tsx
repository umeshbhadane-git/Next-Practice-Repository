async function getAnalytics() {
  await new Promise((resolve) =>
    setTimeout(resolve, 2000)
  );

  return {
    revenue: 245000,
    orders: 128,
    customers: 86,
  };
}

export default async function Analytics() {
  const analytics = await getAnalytics();

  return (
    <div className="widget">
      <h2>Analytics</h2>

      <div className="analytics">
        <div>
          <span>Revenue</span>
          <strong>₹{analytics.revenue}</strong>
        </div>

        <div>
          <span>Orders</span>
          <strong>{analytics.orders}</strong>
        </div>

        <div>
          <span>Customers</span>
          <strong>{analytics.customers}</strong>
        </div>
      </div>
    </div>
  );
}