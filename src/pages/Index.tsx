import { Search, Image, FileText, Calculator, Archive, Sparkles, TrendingUp, ChevronRight, ArrowRight, Lightbulb, Flame, Sparkle } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import AdSpace from "@/components/AdSpace";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const categories = [
    {
      id: "image",
      title: "Image Tools",
      tools: [
        {
          icon: Image,
          title: "Image Compressor",
          description: "Reduce image file size without losing quality",
          href: "/tool/image-compressor",
          category: "Image"
        },
        {
          icon: Image,
          title: "Image Resizer",
          description: "Resize images to any dimension quickly",
          href: "/tool/image-resizer",
          category: "Image"
        },
        {
          icon: Image,
          title: "Image Converter",
          description: "Convert between PNG, JPG, WEBP formats",
          href: "/tool/image-converter",
          category: "Image"
        },
      ]
    },
    {
      id: "text",
      title: "Text Tools",
      tools: [
        {
          icon: FileText,
          title: "Case Converter",
          description: "Convert text to uppercase, lowercase, title case",
          href: "/tool/case-converter",
          category: "Text"
        },
        {
          icon: FileText,
          title: "Word Counter",
          description: "Count words, characters, and lines in text",
          href: "/tool/word-counter",
          category: "Text"
        },
        {
          icon: FileText,
          title: "Text Formatter",
          description: "Format and beautify your text content",
          href: "/tool/text-formatter",
          category: "Text"
        },
      ]
    },
    {
      id: "math",
      title: "Math Tools",
      tools: [
        {
          icon: Calculator,
          title: "BMI Calculator",
          description: "Calculate your Body Mass Index instantly",
          href: "/tool/bmi-calculator",
          category: "Math"
        },
        {
          icon: Calculator,
          title: "Percentage Calculator",
          description: "Calculate percentages, increases, and decreases",
          href: "/tool/percentage-calculator",
          category: "Math"
        },
        {
          icon: Calculator,
          title: "Advanced Calculator",
          description: "Scientific calculator with advanced functions",
          href: "/tool/calculator",
          category: "Math"
        },
      ]
    },
    {
      id: "file",
      title: "File Tools",
      tools: [
        {
          icon: Archive,
          title: "PDF to Word",
          description: "Convert PDF documents to Word format",
          href: "/tool/pdf-to-word",
          category: "File"
        },
        {
          icon: Archive,
          title: "ZIP Extractor",
          description: "Extract files from ZIP archives online",
          href: "/tool/zip-extractor",
          category: "File"
        },
        {
          icon: Archive,
          title: "File Merger",
          description: "Merge multiple files into one",
          href: "/tool/file-merger",
          category: "File"
        },
      ]
    },
  ];

  const trendingTools = [
    {
      icon: FileText,
      title: "Case Converter",
      description: "Convert text to uppercase, lowercase, title case",
      href: "/tool/case-converter",
      category: "Text"
    },
    {
      icon: Image,
      title: "Image Compressor",
      description: "Reduce image file size without losing quality",
      href: "/tool/image-compressor",
      category: "Image"
    },
    {
      icon: Calculator,
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index instantly",
      href: "/tool/bmi-calculator",
      category: "Math"
    },
    {
      icon: Archive,
      title: "PDF to Word",
      description: "Convert PDF documents to Word format",
      href: "/tool/pdf-to-word",
      category: "File"
    },
  ];

  const newTools = [
    {
      icon: Image,
      title: "Image Resizer",
      description: "Resize images to any dimension quickly",
      href: "/tool/image-resizer",
      category: "Image",
      isNew: true
    },
    {
      icon: FileText,
      title: "Word Counter",
      description: "Count words, characters, and lines in text",
      href: "/tool/word-counter",
      category: "Text",
      isNew: true
    },
    {
      icon: Calculator,
      title: "Percentage Calculator",
      description: "Calculate percentages, increases, and decreases",
      href: "/tool/percentage-calculator",
      category: "Math",
      isNew: true
    },
    {
      icon: Archive,
      title: "ZIP Extractor",
      description: "Extract files from ZIP archives online",
      href: "/tool/zip-extractor",
      category: "File",
      isNew: true
    },
  ];

  const { toast } = useToast();
  const [requestForm, setRequestForm] = useState({
    name: "",
    email: "",
    description: ""
  });
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSubmitted(true);
    toast({
      title: "✅ Thanks! We'll review your suggestion.",
      description: "We appreciate your feedback and will consider your tool request.",
    });
    setTimeout(() => {
      setRequestForm({ name: "", email: "", description: "" });
      setRequestSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">100+ Free Tools</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              All tools you need,<br />in your language
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Simple, fast, and free online tools for image conversion, text formatting, 
              calculations, file compression, and more.
            </p>

            {/* Hero Search */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Find a tool... (e.g., 'image compressor')" 
                className="pl-12 h-14 text-lg bg-white text-foreground border-0 shadow-xl"
              />
              <Button 
                size="lg" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90"
              >
                Search
              </Button>
            </div>

            {/* Ad Banner */}
            <div className="max-w-3xl mx-auto">
              <AdSpace size="leaderboard" />
            </div>
          </div>
        </section>

        {/* Popular Tools Section with Tabs */}
        <section id="popular" className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <Tabs defaultValue="trending" className="w-full">
              <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold">Popular Tools</h2>
                </div>
                <TabsList className="bg-background border shadow-sm">
                  <TabsTrigger value="trending" className="gap-2">
                    <Flame className="h-4 w-4" />
                    Trending Tools
                  </TabsTrigger>
                  <TabsTrigger value="new" className="gap-2">
                    <Sparkle className="h-4 w-4" />
                    New Tools
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="trending" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  {trendingTools.map((tool, index) => (
                    <ToolCard key={index} {...tool} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="new" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  {newTools.map((tool, index) => (
                    <ToolCard key={index} {...tool} />
                  ))}
                </div>
              </TabsContent>

              <div className="text-center mt-6">
                <Link 
                  to="/popular" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View all popular tools
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Browse by Category</h2>
            
            <div className="space-y-16">
              {categories.map((category) => (
                <div key={category.id} id={category.id}>
                  <Link 
                    to={`/category/${category.id}`}
                    className="group inline-flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity"
                  >
                    <span className="w-2 h-8 bg-primary rounded-full"></span>
                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                    <ChevronRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.tools.map((tool, index) => (
                      <ToolCard key={index} {...tool} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request a Tool Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-card rounded-lg border p-8 shadow-card">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 text-primary mb-4">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold mb-3">💡 Request a Tool</h2>
                <p className="text-muted-foreground">
                  Didn't find what you're looking for? Suggest a tool you'd like us to build next.
                </p>
              </div>

              {!requestSubmitted ? (
                <form onSubmit={handleRequestSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name (optional)</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={requestForm.name}
                      onChange={(e) => setRequestForm({ ...requestForm, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email (optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={requestForm.email}
                      onChange={(e) => setRequestForm({ ...requestForm, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Describe the tool you want *</Label>
                    <Textarea
                      id="description"
                      placeholder="I would like a tool that..."
                      value={requestForm.description}
                      onChange={(e) => setRequestForm({ ...requestForm, description: e.target.value })}
                      required
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Request
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <p className="text-xl font-semibold text-primary">Thanks! We'll review your suggestion.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Ad Section Before Footer */}
        <section className="py-12 px-4 bg-muted/20">
          <div className="container mx-auto max-w-md">
            <AdSpace size="medium-rectangle" className="mx-auto" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
