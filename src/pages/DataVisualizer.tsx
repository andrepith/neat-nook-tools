import { useState } from "react";
import { BarChart3, LineChart as LineChartIcon, PieChart as PieChartIcon } from "lucide-react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts";

const DataVisualizer = () => {
  const [activeChart, setActiveChart] = useState<"bar" | "line" | "pie">("bar");

  const barData = [
    { month: "Jan", sales: 186, expenses: 80 },
    { month: "Feb", sales: 305, expenses: 200 },
    { month: "Mar", sales: 237, expenses: 120 },
    { month: "Apr", sales: 273, expenses: 190 },
    { month: "May", sales: 209, expenses: 130 },
    { month: "Jun", sales: 314, expenses: 140 },
  ];

  const lineData = [
    { day: "Mon", visitors: 275, pageViews: 450 },
    { day: "Tue", visitors: 320, pageViews: 520 },
    { day: "Wed", visitors: 290, pageViews: 480 },
    { day: "Thu", visitors: 350, pageViews: 600 },
    { day: "Fri", visitors: 380, pageViews: 650 },
    { day: "Sat", visitors: 420, pageViews: 720 },
    { day: "Sun", visitors: 390, pageViews: 680 },
  ];

  const pieData = [
    { category: "Desktop", value: 450, fill: "hsl(var(--chart-1))" },
    { category: "Mobile", value: 380, fill: "hsl(var(--chart-2))" },
    { category: "Tablet", value: 170, fill: "hsl(var(--chart-3))" },
  ];

  const barChartConfig = {
    sales: {
      label: "Sales",
      color: "hsl(var(--chart-1))",
    },
    expenses: {
      label: "Expenses",
      color: "hsl(var(--chart-2))",
    },
  };

  const lineChartConfig = {
    visitors: {
      label: "Visitors",
      color: "hsl(var(--chart-1))",
    },
    pageViews: {
      label: "Page Views",
      color: "hsl(var(--chart-2))",
    },
  };

  const pieChartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
    tablet: {
      label: "Tablet",
      color: "hsl(var(--chart-3))",
    },
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Data Tools", href: "#" },
    { label: "Data Visualizer" },
  ];

  const howToSteps = [
    "Select a chart type from the tabs (Bar, Line, or Pie)",
    "View the interactive chart with sample data",
    "Hover over data points to see detailed values",
    "Use this as a reference for creating your own data visualizations",
  ];

  const relatedTools = [
    {
      icon: BarChart3,
      title: "Chart Generator",
      description: "Create custom charts from your data",
      href: "/tool/chart-generator",
    },
    {
      icon: LineChartIcon,
      title: "Statistics Calculator",
      description: "Calculate mean, median, and more",
      href: "/tool/statistics-calculator",
    },
  ];

  return (
    <ToolLayout
      breadcrumbs={breadcrumbs}
      toolName="Data Visualizer"
      toolDescription="Explore interactive charts and data visualization examples using bar charts, line charts, and pie charts."
      badge="Free"
      howToSteps={howToSteps}
      relatedTools={relatedTools}
    >
      <Card className="p-6">
        <Tabs defaultValue="bar" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="bar" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Bar Chart
            </TabsTrigger>
            <TabsTrigger value="line" className="gap-2">
              <LineChartIcon className="h-4 w-4" />
              Line Chart
            </TabsTrigger>
            <TabsTrigger value="pie" className="gap-2">
              <PieChartIcon className="h-4 w-4" />
              Pie Chart
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bar" className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Monthly Sales & Expenses</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Compare sales and expenses across six months
              </p>
            </div>
            <ChartContainer config={barChartConfig} className="h-[350px] w-full">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="sales" fill="var(--color-sales)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="expenses" fill="var(--color-expenses)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="line" className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Weekly Traffic Analysis</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Track visitors and page views throughout the week
              </p>
            </div>
            <ChartContainer config={lineChartConfig} className="h-[350px] w-full">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line
                  type="monotone"
                  dataKey="visitors"
                  stroke="var(--color-visitors)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="pageViews"
                  stroke="var(--color-pageViews)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="pie" className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Device Usage Distribution</h3>
              <p className="text-sm text-muted-foreground mb-4">
                See how users access your platform by device type
              </p>
            </div>
            <ChartContainer config={pieChartConfig} className="h-[350px] w-full">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartLegend content={<ChartLegendContent />} />
              </PieChart>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </Card>
    </ToolLayout>
  );
};

export default DataVisualizer;
