import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme/theme-provider";
import { Toaster } from "./components/ui/toaster";
import { router } from "./routes";

export const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="pizza-shop-theme">
      <HelmetProvider>
        <Helmet titleTemplate="%s | Pizza Shop" defaultTitle="React App" />
        <Toaster />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  );
};
