import { Search, TrendingUp, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-cooking.jpg";

interface HeroSectionProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const HeroSection = ({ onSearch, searchQuery }: HeroSectionProps) => {
  const stats = [
    { icon: TrendingUp, label: "Trending Recipes", value: "2.5K+" },
    { icon: Users, label: "Home Cooks", value: "15K+" },
    { icon: Clock, label: "Total Cook Time", value: "50K+ hrs" },
  ];

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful cooking ingredients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 animate-fade-in">
            Discover Your Next
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Favorite Recipe
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Explore thousands of delicious recipes from home cooks around the world. 
            Find your perfect meal for any occasion.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 animate-scale-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for recipes, ingredients, or cuisines..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="pl-12 h-14 text-lg bg-white/95 backdrop-blur border-0 focus:ring-2 focus:ring-primary shadow-warm"
              />
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="secondary" size="lg" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
              Popular Recipes
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white/10">
              Quick & Easy
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white/10">
              Healthy Options
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur mb-3">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/5 rounded-full backdrop-blur animate-pulse hidden lg:block" />
      <div className="absolute top-20 right-20 w-16 h-16 bg-white/5 rounded-full backdrop-blur animate-pulse hidden lg:block" />
    </section>
  );
};

export default HeroSection;