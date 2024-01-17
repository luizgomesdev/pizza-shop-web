import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";

export const AccountMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none"
        >
          PizzaShop
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel className="flex flex-col">
          <span>Jhon Doe</span>
          <span className="text-sm font-normal text-muted-foreground">
            jhondoe@gmail.com
          </span>

          <DropdownMenuSeparator className="my-2" />
        </DropdownMenuLabel>

        <DropdownMenuItem className="cursor-pointer">
          <Building className="w-4 h-4 " />
          <span className="ml-2">Perfil da loja</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="text-rose-500 hover:text-rose-400 cursor-pointer"
          asChild
        >
          <Link to="/sign-in">
            <LogOut className="w-4 h-4" />
            <span className="ml-2">Sair</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
