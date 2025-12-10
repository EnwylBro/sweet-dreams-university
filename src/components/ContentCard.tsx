import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  icon?: ReactNode;
}

export function ContentCard({ children, className, title, icon }: ContentCardProps) {
  return (
    <div className={cn(
      "bg-card-gradient rounded-2xl p-6 md:p-8 border border-border/30 card-shadow backdrop-blur-sm",
      className
    )}>
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-primary">{icon}</div>}
          {title && <h3 className="text-xl font-semibold text-foreground">{title}</h3>}
        </div>
      )}
      {children}
    </div>
  );
}
