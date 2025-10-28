import { useState } from "react";
import { FileText, Copy, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Ad Space - Top */}
          <div className="mb-8 flex justify-center">
            <AdSpace size="leaderboard" />
          </div>

          {/* Tool Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Text Case Converter</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Convert your text to uppercase, lowercase, title case, or sentence case instantly. 
              Simple, fast, and free to use.
            </p>
          </div>

          {/* Tool Interface */}
          <div className="bg-card rounded-lg border shadow-card p-6 md:p-8 mb-8">
            <div className="space-y-6">
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
            </div>
          </div>

          {/* Ad Space - Bottom */}
          <div className="mb-8 flex justify-center">
            <AdSpace size="banner" />
          </div>

          {/* How to Use Section */}
          <div className="bg-muted/30 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-semibold text-primary">1.</span>
                <span>Enter or paste your text in the input box above</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary">2.</span>
                <span>Click on the desired case conversion button (uppercase, lowercase, title case, or sentence case)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary">3.</span>
                <span>Your converted text will appear in the output box</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary">4.</span>
                <span>Copy or share your result using the buttons below the output</span>
              </li>
            </ol>
          </div>

          {/* Share Section */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Share this tool</h3>
            <div className="flex justify-center gap-3">
              <Button variant="outline" size="sm">Facebook</Button>
              <Button variant="outline" size="sm">X (Twitter)</Button>
              <Button variant="outline" size="sm">WhatsApp</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseConverter;
