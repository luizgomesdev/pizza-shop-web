import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { OrderStatus, OrderStatusBR } from "../enums/OrderStatus.enum";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

export const OrderTableFilters = () => {
  const selectOptions = Object.values(OrderStatus).map((value) => ({
    value,
    label:
      Object.values(OrderStatusBR)[Object.values(OrderStatus).indexOf(value)],
  }));

  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID do pedido" className="h-8 max-w-[128px]" />
      <Input placeholder="Nome do cliente" className="h-8 max-w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 max-w-[192px]">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">Todos</SelectItem>

          {selectOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button variant="secondary" size="xs" type="submit">
        <Search className="mr-2 w-4 h-4" />
        Filtrar Resultados
      </Button>

      <Button variant="outline" size="xs" type="reset">
        <X className="mr-2 w-4 h-4" />
        Remover Filtros
      </Button>
    </form>
  );
};
