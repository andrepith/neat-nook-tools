import { Search, Image, FileText, Calculator, Archive, Sparkles, TrendingUp, ChevronRight, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import AdSpace from "@/components/AdSpace";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

  const popularTools = [
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

        {/* Popular Tools Section */}
        <section id="popular" className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Popular Tools</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {popularTools.map((tool, index) => (
                <ToolCard key={index} {...tool} />
              ))}
            </div>

            <div className="text-center">
              <Link 
                to="/popular" 
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                View all popular tools
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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
