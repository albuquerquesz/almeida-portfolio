import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-mono text-lg font-semibold text-foreground hover:text-primary transition-colors">
          ha
        </a>
        
        <nav className="flex items-center gap-6">
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
