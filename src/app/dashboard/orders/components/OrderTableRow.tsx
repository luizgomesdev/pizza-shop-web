import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";

import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./OrderDetails";

type OrderTableRowProps = {
  order: {
    id: number;
    status: string;
    customer: {
      name: string;
    };
    createdAt: string;
    total: number;
  };
};

export const OrderTableRow = ({ order }: OrderTableRowProps) => {
  console.log(order);

  const statusComponent = {
    Pending: {
      bulletColor: "bg-blue-400 dark:bg-blue-500",
      textColor: "text-blue-400 dark:text-blue-500",
      textValue: "Pendente",
    },
    Canceled: {
      bulletColor: "bg-rose-400 dark:bg-rose-500",
      textColor: "text-rose-400 dark:text-rose-500",
      textValue: "Cancelado",
    },
    Preparing: {
      bulletColor: "bg-yellow-400 dark:bg-yellow-500",
      textColor: "text-yellow-400 dark:text-yellow-500",
      textValue: "Preparando",
    },
  };

  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="w-3 h-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        #{order.id}
      </TableCell>
      <TableCell className="text-muted-foreground">{order.createdAt}</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              statusComponent[order.status].bulletColor
            }`}
          />
          <span
            className={`font-medium ${statusComponent[order.status].textColor}`}
          >
            {statusComponent[order.status].textValue}
          </span>
        </div>
      </TableCell>
      <TableCell className="font-medium">{order.customer.name}</TableCell>
      <TableCell className="font-medium">
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(order.total)}
      </TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-3 w-3 h-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <X className="mr-3 w-3 h-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
};
