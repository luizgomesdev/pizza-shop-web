import React from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";

export interface NavLinkProps extends LinkProps {
  icon: React.ReactNode;
}

export const NavLink = (item: NavLinkProps) => {
  const { pathname } = useLocation();
  const isActive = pathname.startsWith(item.to.toString());

  return (
    <Link
      to={item.to}
      data-active={isActive}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors data-[active=true]:text-foreground"
    >
      {item.icon}
      {item.children}
    </Link>
  );
};
