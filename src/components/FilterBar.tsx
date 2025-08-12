import { Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterBarProps {
  selectedCategory: string;
  selectedDifficulty: string;
  selectedCookTime: string;
  onCategoryChange: (category: string) => void;
  onDifficultyChange: (difficulty: string) => void;
  onCookTimeChange: (time: string) => void;
  activeFilters: number;
  onClearFilters: () => void;
}

const FilterBar = ({
  selectedCategory,
  selectedDifficulty,
  selectedCookTime,
  onCategoryChange,
  onDifficultyChange,
  onCookTimeChange,
  activeFilters,
  onClearFilters,
}: FilterBarProps) => {
  const categories = [
    "All Cuisines",
    "Italian",
    "Asian",
    "Mexican",
    "Indian",
    "French",
    "Mediterranean",
    "American",
    "African",
    "Middle Eastern",
    "Spanish",
    "Thai",
    "Japanese",
  ];

  return (
    <div className="border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left side - Filter title and active count */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
              <h2 className="font-semibold text-foreground">Filters</h2>
            </div>
            {activeFilters > 0 && (
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {activeFilters} active
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClearFilters}
                  className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>

          {/* Right side - Filter controls */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={onCategoryChange}>
              <SelectTrigger className="w-full sm:w-[180px] bg-muted/50 border-border">
                <SelectValue placeholder="All Cuisines" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Difficulty Filter */}
            <Select value={selectedDifficulty} onValueChange={onDifficultyChange}>
              <SelectTrigger className="w-full sm:w-[140px] bg-muted/50 border-border">
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>

            {/* Cook Time Filter */}
            <Select value={selectedCookTime} onValueChange={onCookTimeChange}>
              <SelectTrigger className="w-full sm:w-[140px] bg-muted/50 border-border">
                <SelectValue placeholder="Any Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Time</SelectItem>
                <SelectItem value="quick">Under 30 min</SelectItem>
                <SelectItem value="medium">30-60 min</SelectItem>
                <SelectItem value="long">Over 60 min</SelectItem>
              </SelectContent>
            </Select>

            {/* Advanced Filters Button */}
            <Button
              variant="outline"
              size="default"
              className="border-border hover:bg-muted"
            >
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;