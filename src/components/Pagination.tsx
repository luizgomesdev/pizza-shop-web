import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationProps = {
  total: number;
  limit: number;
  page: number;
  onPageChange: (page: number) => void;
};

export const CustomPagination = ({
  total,
  limit,
  page,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {total} item(s)
      </span>

      <div className="flex items-center  gap-2 lg:gap-4">
        <span className="text-sm text-muted-foreground">
          Página {page + 1} de {limit}
        </span>

        <Pagination className="w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>

            {[...Array(total)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink href="#">{index + 1}</PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
