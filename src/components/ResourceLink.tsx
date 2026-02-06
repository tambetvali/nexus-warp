import { cn } from "@/lib/utils";
import { ExternalLink, Github, Presentation } from "lucide-react";

interface ResourceLinkProps {
  href: string;
  title: string;
  description?: string;
  type?: 'github' | 'prezi' | 'external';
  className?: string;
}

export const ResourceLink = ({ 
  href, 
  title, 
  description, 
  type = 'external',
  className 
}: ResourceLinkProps) => {
  const Icon = {
    github: Github,
    prezi: Presentation,
    external: ExternalLink,
  }[type];

  const iconColors = {
    github: 'text-foreground',
    prezi: 'text-secondary',
    external: 'text-primary',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-start gap-3 p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-all duration-200",
        "hover:border-primary/30",
        className
      )}
    >
      <Icon className={cn("w-5 h-5 mt-0.5 flex-shrink-0", iconColors[type])} />
      
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
          {title}
        </h4>
        {description && (
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
            {description}
          </p>
        )}
      </div>
      
      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
};
