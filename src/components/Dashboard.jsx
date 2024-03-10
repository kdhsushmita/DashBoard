import BuyerProfileChart from "./BuyerProfileChart";
import DashboardStatGrid from "./DashboardStatGrid";
import RecentOrders from "./RecentOrders";
import TransactionChart from "./TransactionChart";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfileChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
      </div>
    </div>
  );
}
