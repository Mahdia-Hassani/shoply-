import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, Moon, Sun, Store } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function SiteHeader() {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/cart", label: "Cart" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
          <Store className="h-5 w-5 text-primary" />
          <span>Shoply</span>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
            className="rounded-md p-2 hover:bg-accent transition-colors"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Link
            to="/cart"
            aria-label="View cart"
            className="relative rounded-md p-2 hover:bg-accent transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground animate-bounce-in">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="md:hidden rounded-md p-2 hover:bg-accent"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="md:hidden border-t bg-background px-4 py-2 space-y-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="block rounded px-3 py-2 text-foreground hover:bg-accent"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}