import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import React from "react";

export const MonthRevenueCard = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">R$ 1248,00</span>
        <p className="text-cs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400"> + 10%</span>{" "}
          em relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  );
};
