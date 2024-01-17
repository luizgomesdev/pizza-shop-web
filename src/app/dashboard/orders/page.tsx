import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import { OrderTableFilters } from "./components/OrderTableFilters";
import { OrderTableRow } from "./components/OrderTableRow";
import { OrderStatus } from "./enums/OrderStatus.enum";
import { CustomPagination } from "@/components/Pagination";

export const Orders = () => {
  const orders = [
    {
      id: 1,
      status: OrderStatus.pending,
      customer: {
        name: "Jhon Doe",
      },
      createdAt: "2021-09-01T00:00:00.000Z",
      total: 100,
    },
    {
      id: 2,
      status: OrderStatus.canceled,
      customer: {
        name: "Jhon Doe",
      },
      createdAt: "2021-09-01T00:00:00.000Z",
      total: 100,
    },
    {
      id: 3,
      status: OrderStatus.preparing,
      customer: {
        name: "Jhon Doe",
      },
      createdAt: "2021-09-01T00:00:00.000Z",
      total: 100,
    },
  ];

  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Pedidos</h1>
      </div>

      <div className="space-y-2.5">
        <OrderTableFilters />

        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead>Identificador</TableHead>
                <TableHead>Realizado há</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Total do Pedido</TableHead>
                <TableHead></TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <OrderTableRow key={order.id} order={order} />
              ))}
            </TableBody>
          </Table>
        </div>

        <CustomPagination
          total={5}
          limit={1}
          page={0}
          onPageChange={() => {}}
        />
      </div>
    </>
  );
};
