import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  icon?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeader = ({ 
  icon, 
  title, 
  subtitle, 
  className,
  align = 'left' 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      "mb-8",
      align === 'center' && "text-center",
      className
    )}>
      {icon && (
        <div className="text-3xl mb-3">{icon}</div>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-2 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
