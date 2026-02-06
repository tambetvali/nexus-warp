import { cn } from "@/lib/utils";

interface MathBlockProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const MathBlock = ({ children, className, title }: MathBlockProps) => {
  return (
    <div className={cn("math-block relative overflow-hidden", className)}>
      {title && (
        <div className="text-xs uppercase tracking-widest text-primary/60 mb-3 font-sans">
          {title}
        </div>
      )}
      <div className="text-foreground">{children}</div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
    </div>
  );
};

interface FormulaProps {
  children: React.ReactNode;
  highlight?: boolean;
}

export const Formula = ({ children, highlight }: FormulaProps) => {
  return (
    <span className={cn(
      "font-mono text-lg",
      highlight && "formula-highlight"
    )}>
      {children}
    </span>
  );
};

interface VariableProps {
  children: React.ReactNode;
  type: 'z' | 'x' | 'y' | 'octave';
}

export const Variable = ({ children, type }: VariableProps) => {
  const classes = {
    z: 'variable-z',
    x: 'variable-x', 
    y: 'variable-y',
    octave: 'variable-octave',
  };
  
  return <span className={classes[type]}>{children}</span>;
};
