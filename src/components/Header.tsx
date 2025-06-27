import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: "home" | "profiles" | "anime" | "chat") => void;
}

const Header = ({ currentSection, onSectionChange }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onSectionChange("home")}
          >
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <Icon name="MessageCircle" size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-poppins font-bold text-foreground">
                AI Chattings
              </h1>
              <p className="text-xs text-muted-foreground">Unlimited Chat</p>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Icon
                name="Search"
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search AI characters..."
                className="pl-10 bg-input/50 border-border/50 text-foreground"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => onSectionChange("home")}
              className={`font-medium transition-colors ${
                currentSection === "home"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onSectionChange("profiles")}
              className={`font-medium transition-colors ${
                currentSection === "profiles"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Characters
            </button>
            <button
              onClick={() => onSectionChange("anime")}
              className={`font-medium transition-colors ${
                currentSection === "anime"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Anime Girls
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Icon name="Search" size={18} />
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Icon name="Menu" size={18} />
            </Button>
            <Button className="gradient-primary hover:opacity-90 font-medium">
              <Icon name="User" size={16} className="mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
