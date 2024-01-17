import { Helmet } from "react-helmet-async";

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Sign In" />
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      </div>
    </>
  );
};
