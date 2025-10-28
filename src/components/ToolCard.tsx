import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  category?: string;
}

const ToolCard = ({ icon: Icon, title, description, href, category }: ToolCardProps) => {
  return (
    <Link to={href}>
      <div className="group relative bg-card rounded-lg border p-6 hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-card-hover h-full flex flex-col">
        {category && (
          <span className="absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
            {category}
          </span>
        )}
        
        <div className="mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 flex-grow">
          {description}
        </p>

        <Button 
          variant="outline" 
          size="sm" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
        >
          Try Tool
        </Button>
      </div>
    </Link>
  );
};

export default ToolCard;
