import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { NavLink, NavLinkProps } from "./NavLink";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./theme/theme-toggle";
import { AccountMenu } from "./AccountMenu";

const navItems: NavLinkProps[] = [
  {
    icon: <Home className="w-4 h-4" />,
    children: "Home",
    to: "/",
  },
  {
    icon: <UtensilsCrossed className="w-4 h-4" />,
    children: "Pedidos",
    to: "/orders",
  },
];

export const Header = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Link to="/">
          <Pizza className="w-6 h-6" />
        </Link>
        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.to.toString()} {...item} />
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  );
};
