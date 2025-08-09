import { Search, Heart, User, Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Header = ({ onSearch, searchQuery }: HeaderProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
              <span className="font-bold text-white">R</span>
            </div>
            <h1 className="text-xl font-playfair font-bold text-foreground">
              Recipe Hub
            </h1>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search recipes, ingredients..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="pl-10 bg-muted/50 border-border focus:ring-primary"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hover:bg-muted"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Favorites */}
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Favorites</span>
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <User className="h-4 w-4" />
              <span className="sr-only">Profile</span>
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-muted">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="pl-10 bg-muted/50 border-border focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;