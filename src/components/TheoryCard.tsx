import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface TheoryCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  to: string;
  gradient?: 'primary' | 'secondary' | 'accent';
}

export const TheoryCard = ({ 
  icon, 
  title, 
  subtitle, 
  description, 
  to,
  gradient = 'primary' 
}: TheoryCardProps) => {
  const gradientClasses = {
    primary: 'from-primary/20 to-transparent',
    secondary: 'from-secondary/20 to-transparent',
    accent: 'from-accent/20 to-transparent',
  };

  const borderClasses = {
    primary: 'hover:border-primary/50',
    secondary: 'hover:border-secondary/50',
    accent: 'hover:border-accent/50',
  };

  return (
    <Link 
      to={to}
      className={cn(
        "group block relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300",
        "card-glow",
        borderClasses[gradient]
      )}
    >
      {/* Gradient overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        gradientClasses[gradient]
      )} />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="text-4xl mb-4">{icon}</div>
        
        <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-primary font-mono mb-3">{subtitle}</p>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
          <span>Explore</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
