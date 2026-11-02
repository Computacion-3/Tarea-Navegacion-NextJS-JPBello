
import type { Metadata } from "next";
import "./globals.css";

import { StoreProvider } from "@/src/store/StoreProvider";
import AppHeader from "@/src/components/layout/AppHeader";

export const metadata: Metadata = {
  title: "Routina",
  description: "Aplicación de gestión de rutinas",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-screen flex flex-col">
        <StoreProvider>
          <AppHeader />
          <div className="flex-1">
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
