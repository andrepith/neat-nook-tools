import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AdSpace from "./AdSpace";
import ToolCard from "./ToolCard";
import { Badge } from "./ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface RelatedTool {
  icon: any;
  title: string;
  description: string;
  href: string;
  category?: string;
  isNew?: boolean;
}

interface ToolLayoutProps {
  toolName: string;
  toolDescription: string;
  badge?: string;
  breadcrumbs: BreadcrumbItem[];
  children: ReactNode;
  howToSteps: string[];
  relatedTools: RelatedTool[];
}

const ToolLayout = ({
  toolName,
  toolDescription,
  badge,
  breadcrumbs,
  children,
  howToSteps,
  relatedTools,
}: ToolLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="contents">
                  {index > 0 && <BreadcrumbSeparator />}
                  <BreadcrumbItem>
                    {crumb.href ? (
                      <BreadcrumbLink asChild>
                        <Link to={crumb.href}>{crumb.label}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>

          {/* Tool Header */}
          <div className="mb-8">
            <div className="flex items-start gap-3 mb-3">
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {toolName}
              </h1>
              {badge && (
                <Badge variant="secondary" className="mt-1">
                  {badge}
                </Badge>
              )}
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {toolDescription}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Main Tool Interaction Card */}
              {children}

              {/* How to Use Section */}
              <div className="bg-card rounded-lg border p-6 shadow-card">
                <h2 className="text-2xl font-semibold mb-4">How to Use This Tool</h2>
                <ol className="space-y-3">
                  {howToSteps.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Mobile Ad - Below content on mobile */}
              <div className="lg:hidden">
                <AdSpace size="medium-rectangle" />
              </div>

              {/* Bottom Ad Banner */}
              <AdSpace size="leaderboard" />
            </div>

            {/* Sidebar - Desktop Only */}
            <div className="hidden lg:block space-y-8">
              {/* Desktop Ad */}
              <div className="sticky top-8">
                <AdSpace size="medium-rectangle" />
              </div>
            </div>
          </div>

          {/* Related Tools Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">You may also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTools.map((tool, index) => (
                <ToolCard key={index} {...tool} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ToolLayout;
