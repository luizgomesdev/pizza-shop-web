import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const OrderDetails = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-lg font-bold">Pedido: #1</DialogTitle>
        <DialogDescription className="text-sm text-muted-foreground">
          Detalhes do pedido
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full bg-blue-400 dark:bg-blue-500`}
                  />
                  <span
                    className={`font-medium text-blue-400 dark:text-blue-500`}
                  >
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">Jhon Doe</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                (11) 9 9999-9999
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Email</TableCell>
              <TableCell className="flex justify-end">
                jhondoe@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Email</TableCell>
              <TableCell className="flex justify-end">
                Realizado há 1 hora
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Quantidade</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Pizza de Calabresa</TableCell>
              <TableCell className="text-right">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(69.9)}
              </TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(69.9 * 2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza de Mussarela</TableCell>
              <TableCell className="text-right">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(49.9)}
              </TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(49.9 * 2)}
              </TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>
                Total do Pedido
              </TableCell>
              <TableCell className="text-right font-medium">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(218.6)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
};
