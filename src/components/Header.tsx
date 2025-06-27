import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: "home" | "profiles" | "anime" | "chat") => void;
}

const Header = ({ currentSection, onSectionChange }: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onSectionChange("home")}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-romantic-purple rounded-full flex items-center justify-center">
              <Icon name="Heart" size={18} className="text-white" />
            </div>
            <h1 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-primary to-romantic-purple bg-clip-text text-transparent">
              LoveAI
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onSectionChange("home")}
              className={`font-medium transition-colors ${
                currentSection === "home"
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => onSectionChange("profiles")}
              className={`font-medium transition-colors ${
                currentSection === "profiles"
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              AI Подружки
            </button>
            <button
              onClick={() => onSectionChange("anime")}
              className={`font-medium transition-colors ${
                currentSection === "anime"
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              🌸 Аниме девушки
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
            <Button className="bg-gradient-to-r from-primary to-romantic-purple hover:opacity-90 transition-all">
              💕 Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
