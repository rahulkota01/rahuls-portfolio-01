import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-lg font-semibold text-foreground tracking-tight">
          Rahul Kota
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pl-4 border-l border-border/30">
            <ThemeToggle />
            <a
              href={portfolioData.personal.resumeUrl}
              download
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors duration-300"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={portfolioData.personal.resumeUrl}
            download
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500 text-white text-xs font-medium hover:bg-blue-600 transition-colors"
          >
            <FileText size={14} />
            Resume
          </a>
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 nav-glass",
          open ? "max-h-96 border-t border-border/30" : "max-h-0"
        )}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-border/30">
            <ThemeToggle />
            <span className="text-xs text-muted-foreground">Toggle theme</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
