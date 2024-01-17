import { Helmet } from "react-helmet-async";

import { MonthRevenueCard } from "./components/MonthRevenueCard";
import { MonthOrdersAmountCard } from "./components/MonthOrdersAmountCard";
import { DayOrdersAmountCard } from "./components/DayOrdersAmountCard";
import { MonthCanceledOrdersAmount } from "./components/MonthCanceledOrdersAmount";
import { RevenueChart } from "./components/RevenueChart";
import { PopularProductsChart } from "./components/PopularProductsChart";

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmount />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  );
};
