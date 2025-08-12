import { useState, useMemo } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FilterBar from "@/components/FilterBar";
import RecipeCard from "@/components/RecipeCard";
import { mockRecipes, getFilteredRecipes, type Recipe } from "@/data/mockRecipes";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Cuisines");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedCookTime, setSelectedCookTime] = useState("all");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Filter recipes based on current criteria
  const filteredRecipes = useMemo(() => {
    return getFilteredRecipes(
      mockRecipes,
      searchQuery,
      selectedCategory,
      selectedDifficulty,
      selectedCookTime
    );
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedCookTime]);

  // Count active filters
  const activeFilters = useMemo(() => {
    let count = 0;
    if (selectedCategory !== "All Cuisines") count++;
    if (selectedDifficulty !== "all") count++;
    if (selectedCookTime !== "all") count++;
    return count;
  }, [selectedCategory, selectedDifficulty, selectedCookTime]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFavorite = (recipeId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(recipeId)) {
        newFavorites.delete(recipeId);
      } else {
        newFavorites.add(recipeId);
      }
      return newFavorites;
    });
  };

  const handleRecipeClick = (recipe: Recipe) => {
    // TODO: Navigate to recipe detail page or open modal
    console.log("Recipe clicked:", recipe.title);
  };

  const handleClearFilters = () => {
    setSelectedCategory("All Cuisines");
    setSelectedDifficulty("all");
    setSelectedCookTime("all");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header onSearch={handleSearch} searchQuery={searchQuery} />

      {/* Hero Section */}
      <HeroSection onSearch={handleSearch} searchQuery={searchQuery} />

      {/* Filter Bar */}
      <FilterBar
        selectedCategory={selectedCategory}
        selectedDifficulty={selectedDifficulty}
        selectedCookTime={selectedCookTime}
        onCategoryChange={setSelectedCategory}
        onDifficultyChange={setSelectedDifficulty}
        onCookTimeChange={setSelectedCookTime}
        activeFilters={activeFilters}
        onClearFilters={handleClearFilters}
      />

      {/* Results Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h2 className="text-2xl font-playfair font-bold text-foreground mb-2">
              {searchQuery ? `Search Results for "${searchQuery}"` : "Discover Recipes"}
            </h2>
            <p className="text-muted-foreground">
              {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          {/* Sort Options */}
          <div className="mt-4 sm:mt-0">
            <select className="px-4 py-2 border rounded-lg bg-background text-foreground border-border focus:ring-2 focus:ring-primary">
              <option>Sort by: Most Popular</option>
              <option>Sort by: Newest</option>
              <option>Sort by: Cook Time</option>
              <option>Sort by: Rating</option>
            </select>
          </div>
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecipes.map((recipe, index) => (
              <div
                key={recipe.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <RecipeCard
                  recipe={recipe}
                  onFavorite={handleFavorite}
                  isFavorited={favorites.has(recipe.id)}
                  onClick={handleRecipeClick}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                No recipes found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or filters to find more recipes.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  handleClearFilters();
                }}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
                  <span className="font-bold text-white">R</span>
                </div>
                <h3 className="text-xl font-playfair font-bold">Recipe Hub</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Discover and share amazing recipes from around the world. 
                Connect with fellow food lovers and create culinary memories.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Popular Recipes</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">New Recipes</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Meal Planning</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Submit Recipe</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Food Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Recipe Hub. Made with love for food lovers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
