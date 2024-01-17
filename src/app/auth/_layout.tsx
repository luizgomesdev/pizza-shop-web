import { Outlet } from "react-router-dom";
import { Pizza } from "lucide-react";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-2 antialiased">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
        <div
          className="flex items-center gap-3 text-lg font-medium text-foreground"
          onClick={() => window.location.replace("/")}
        >
          <Pizza className="w-5 h-5" />
          <span className="font-semibold">Pizza Shop</span>
        </div>
        <p className="text-sm">
          Painel do parceiro &copy; {new Date().getFullYear()} Todos os direitos
          reservados.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center relative">
        <Outlet />
      </div>
    </div>
  );
};
