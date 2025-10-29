import { useState } from "react";
import { Copy, Share2, Type, FileText, Calculator, Image } from "lucide-react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const CaseConverter = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const convertCase = (type: "upper" | "lower" | "title" | "sentence") => {
    let result = "";
    
    switch (type) {
      case "upper":
        result = inputText.toUpperCase();
        break;
      case "lower":
        result = inputText.toLowerCase();
        break;
      case "title":
        result = inputText
          .toLowerCase()
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        break;
      case "sentence":
        result = inputText
          .toLowerCase()
          .split(". ")
          .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
          .join(". ");
        break;
    }
    
    setOutputText(result);
    toast({
      title: "Conversion complete!",
      description: `Text converted to ${type} case.`,
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard.",
    });
  };

  const shareResult = () => {
    if (navigator.share) {
      navigator.share({
        title: "ToolHub - Case Converter Result",
        text: outputText,
      });
    } else {
      copyToClipboard();
    }
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Text Tools", href: "/" },
    { label: "Case Converter" },
  ];

  const howToSteps = [
    "Enter or paste your text in the input box.",
    "Choose your desired case format: UPPERCASE, lowercase, Title Case, or Sentence case.",
    "Your converted text appears instantly in the output box.",
    "Copy or share your result using the buttons provided.",
  ];

  const relatedTools = [
    {
      icon: FileText,
      title: "Word Counter",
      description: "Count words, characters, and sentences in your text",
      href: "/tool/word-counter",
      category: "Text",
    },
    {
      icon: Type,
      title: "Text Formatter",
      description: "Format and beautify your text with various options",
      href: "/tool/text-formatter",
      category: "Text",
    },
    {
      icon: Calculator,
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index quickly",
      href: "/tool/bmi-calculator",
      category: "Math",
    },
    {
      icon: Image,
      title: "Image Compressor",
      description: "Reduce image file size without losing quality",
      href: "/tool/image-compressor",
      category: "Image",
      isNew: true,
    },
  ];

  return (
    <ToolLayout
      toolName="Case Converter"
      toolDescription="Transform your text between different letter cases instantly. Convert to uppercase, lowercase, title case, or sentence case with a single click. No sign-up required."
      badge="Free"
      breadcrumbs={breadcrumbs}
      howToSteps={howToSteps}
      relatedTools={relatedTools}
    >
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="h-5 w-5 text-primary" />
            Text Case Converter
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input Section */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Input Text
            </label>
            <Textarea
              placeholder="Enter your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[150px] resize-none"
            />
            <p className="text-xs text-muted-foreground mt-2">
              {inputText.length} characters, {inputText.split(/\s+/).filter(Boolean).length} words
            </p>
          </div>

          {/* Conversion Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button 
              onClick={() => convertCase("upper")}
              disabled={!inputText}
              className="w-full"
            >
              UPPERCASE
            </Button>
            <Button 
              onClick={() => convertCase("lower")}
              disabled={!inputText}
              variant="secondary"
              className="w-full"
            >
              lowercase
            </Button>
            <Button 
              onClick={() => convertCase("title")}
              disabled={!inputText}
              variant="secondary"
              className="w-full"
            >
              Title Case
            </Button>
            <Button 
              onClick={() => convertCase("sentence")}
              disabled={!inputText}
              variant="secondary"
              className="w-full"
            >
              Sentence case
            </Button>
          </div>

          {/* Output Section */}
          {outputText && (
            <div>
              <label className="block text-sm font-medium mb-2">
                Output Text
              </label>
              <Textarea
                value={outputText}
                readOnly
                className="min-h-[150px] resize-none bg-muted/30"
              />
              <div className="flex gap-3 mt-4">
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Copy className="h-4 w-4" />
                  Copy
                </Button>
                <Button
                  onClick={shareResult}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </ToolLayout>
  );
};

export default CaseConverter;
