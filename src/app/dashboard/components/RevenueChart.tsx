import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import colors from "tailwindcss/colors";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
} from "recharts";
export const RevenueChart = () => {
  const data = [
    {
      date: "2021-01-01",
      revenue: 1200,
    },
    {
      date: "2021-01-02",
      revenue: 3400,
    },
    {
      date: "2021-01-03",
      revenue: 1000,
    },
    {
      date: "2021-01-04",
      revenue: 210,
    },
    {
      date: "2021-01-05",
      revenue: 5466,
    },
    {
      date: "2021-01-06",
      revenue: 2600,
    },
    {
      date: "2021-01-07",
      revenue: 3800,
    },
  ];

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base">Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={256}>
          <LineChart data={data} style={{ fontSize: "0.75rem" }}>
            <XAxis
              dataKey="date"
              stroke="#888"
              axisLine={false}
              tickLine={false}
              dy={16}
            />
            <YAxis
              width={64}
              stroke="#888"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) =>
                Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(value)
              }
            />
            <Tooltip />

            <CartesianGrid
              vertical={false}
              className="stoke-muted"
              stroke="#888"
            />

            <Line
              type="monotone"
              dataKey="revenue"
              strokeWidth={2}
              stroke={colors.violet[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
