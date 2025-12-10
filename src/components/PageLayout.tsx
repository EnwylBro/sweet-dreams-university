import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { StarField } from "./StarField";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-night">
      <StarField />
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}
