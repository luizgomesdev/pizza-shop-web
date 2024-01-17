import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, Utensils } from "lucide-react";

export const DayOrdersAmountCard = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">5</span>
        <p className="text-cs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400"> -4%</span> em
          relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  );
};
