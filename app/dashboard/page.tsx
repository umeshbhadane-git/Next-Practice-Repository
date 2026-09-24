import { Suspense } from "react";

import UserProfile from "./UserProfile";
import RecentOrders from "./RecentOrders";
import Analytics from "./Analytics";
import AnalyticsSkeleton from "./components/AnalyticsSkeleton";
import OrdersSkeleton from "./components/OrdersSkeleton";
import UserProfileSkeleton from "./components/UserProfileSkeleton";

export default function DashboardPage() {
  return (
    <main className="dashboard">
      <h1>Dashboard</h1>

      <section>
        <Suspense fallback={<UserProfileSkeleton />}>
          <UserProfile />
        </Suspense>
      </section>

      <section>
        <Suspense fallback={<OrdersSkeleton />}>
          <RecentOrders />
        </Suspense>
      </section>

      <section>
        <Suspense fallback={<AnalyticsSkeleton />}>
          <Analytics/>
        </Suspense>
      </section>
    </main>
  );
}