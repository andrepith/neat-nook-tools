import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-xl">ToolHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              All tools you need, in your language.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/#popular" className="hover:text-foreground transition-colors">Popular Tools</Link></li>
              <li><Link to="/#categories" className="hover:text-foreground transition-colors">All Categories</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/#image" className="hover:text-foreground transition-colors">Image Tools</Link></li>
              <li><Link to="/#text" className="hover:text-foreground transition-colors">Text Tools</Link></li>
              <li><Link to="/#math" className="hover:text-foreground transition-colors">Math Tools</Link></li>
              <li><Link to="/#file" className="hover:text-foreground transition-colors">File Tools</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} ToolHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
