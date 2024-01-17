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
  Pie,
  PieChart,
  Tooltip,
  Cell,
  Text,
} from "recharts";
import { BarChart } from "lucide-react";
export const PopularProductsChart = () => {
  const data = [
    {
      productName: "Calabresa",
      amount: 40,
    },
    {
      productName: "Frango",
      amount: 30,
    },
    {
      productName: "Marguerita",
      amount: 50,
    },
    {
      productName: "Portuguesa",
      amount: 16,
    },
    {
      productName: "Mussarela",
      amount: 42,
    },
  ];

  const COLORS = [
    colors.sky[500],
    colors.emerald[500],
    colors.fuchsia[500],
    colors.amber[500],
    colors.violet[500],
  ];

  return (
    <Card className="col-span-3">
      <CardHeader className="flex-row items-center justify-between ">
        <CardTitle className="text-base">Produtos populares</CardTitle>
        <BarChart className="w-4 h-4 text-muted-foreground" />
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={256}>
          <PieChart style={{ fontSize: "0.75rem" }}>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="productName"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              // fill={colors.emerald[500]}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = 12 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  // @ts-ignore
                  <Text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {data[index].productName.length > 12
                      ? data[index].productName.substring(0, 12).concat("...")
                      : data[index].productName}
                    {value}
                  </Text>
                );
              }}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                  className="stroke-background hover:opacity-80"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
