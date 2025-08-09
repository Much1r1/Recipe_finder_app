import { Clock, Users, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Recipe {
  id: string;
  title: string;
  image: string;
  cookTime: number;
  servings: number;
  difficulty: "easy" | "medium" | "hard";
  rating: number;
  tags: string[];
  author: string;
  description: string;
}

interface RecipeCardProps {
  recipe: Recipe;
  onFavorite?: (id: string) => void;
  isFavorited?: boolean;
  onClick?: (recipe: Recipe) => void;
}

const RecipeCard = ({ recipe, onFavorite, isFavorited = false, onClick }: RecipeCardProps) => {
  const getDifficultyVariant = (difficulty: Recipe["difficulty"]) => {
    switch (difficulty) {
      case "easy":
        return "difficulty-easy";
      case "medium":
        return "difficulty-medium";
      case "hard":
        return "difficulty-hard";
      default:
        return "difficulty-easy";
    }
  };

  return (
    <div className="recipe-card group cursor-pointer" onClick={() => onClick?.(recipe)}>
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-card-image group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay with favorite button */}
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 bg-white/80 hover:bg-white rounded-full shadow-sm"
            onClick={(e) => {
              e.stopPropagation();
              onFavorite?.(recipe.id);
            }}
          >
            <Heart 
              className={`h-4 w-4 ${isFavorited ? 'fill-destructive text-destructive' : 'text-gray-600'}`} 
            />
          </Button>
        </div>

        {/* Difficulty Badge */}
        <div className="absolute top-3 left-3">
          <span className={`recipe-difficulty ${getDifficultyVariant(recipe.difficulty)}`}>
            {recipe.difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-playfair font-semibold text-lg text-card-foreground leading-tight">
            {recipe.title}
          </h3>
          <div className="flex items-center ml-2">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="text-sm text-muted-foreground ml-1">{recipe.rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {recipe.description}
        </p>

        {/* Meta Information */}
        <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{recipe.cookTime} min</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {recipe.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="recipe-tag text-xs">
              {tag}
            </Badge>
          ))}
          {recipe.tags.length > 3 && (
            <Badge variant="secondary" className="recipe-tag text-xs">
              +{recipe.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Author */}
        <p className="text-xs text-muted-foreground">
          by <span className="font-medium">{recipe.author}</span>
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;