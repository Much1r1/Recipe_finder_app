import pastaImage from "@/assets/pasta-dish.jpg";
import cakeImage from "@/assets/chocolate-cake.jpg";
import saladImage from "@/assets/fresh-salad.jpg";

export interface Recipe {
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
  category: string;
  ingredients: string[];
  instructions: string[];
}

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Classic Spaghetti Carbonara",
    image: pastaImage,
    cookTime: 25,
    servings: 4,
    difficulty: "medium",
    rating: 4.8,
    tags: ["Italian", "Pasta", "Quick", "Comfort Food"],
    author: "Marco Romano",
    description: "Authentic Italian carbonara with eggs, cheese, pancetta, and freshly ground black pepper.",
    category: "Italian",
    ingredients: [
      "400g spaghetti",
      "200g pancetta or guanciale",
      "4 large eggs",
      "100g Pecorino Romano cheese",
      "Black pepper",
      "Salt"
    ],
    instructions: [
      "Bring a large pot of salted water to boil",
      "Cook spaghetti according to package instructions",
      "Meanwhile, cook pancetta in a large skillet until crispy",
      "Whisk eggs with grated cheese and black pepper",
      "Drain pasta, reserving 1 cup pasta water",
      "Toss hot pasta with pancetta and egg mixture",
      "Add pasta water as needed for creamy consistency",
      "Serve immediately with extra cheese and pepper"
    ]
  },
  {
    id: "2", 
    title: "Decadent Chocolate Lava Cake",
    image: cakeImage,
    cookTime: 45,
    servings: 6,
    difficulty: "hard",
    rating: 4.9,
    tags: ["Dessert", "Chocolate", "French", "Special Occasion"],
    author: "Sophie Laurent",
    description: "Rich, molten chocolate cake with a gooey center that flows like lava when cut.",
    category: "French",
    ingredients: [
      "200g dark chocolate",
      "200g butter",
      "4 large eggs",
      "100g caster sugar",
      "50g plain flour",
      "Butter for ramekins",
      "Cocoa powder for dusting"
    ],
    instructions: [
      "Preheat oven to 200°C",
      "Butter ramekins and dust with cocoa powder",
      "Melt chocolate and butter in double boiler",
      "Whisk eggs and sugar until pale and thick",
      "Fold in melted chocolate mixture",
      "Sift in flour and gently fold",
      "Divide between ramekins",
      "Bake for 12-14 minutes until edges are firm"
    ]
  },
  {
    id: "3",
    title: "Mediterranean Quinoa Salad",
    image: saladImage,
    cookTime: 20,
    servings: 4,
    difficulty: "easy",
    rating: 4.6,
    tags: ["Healthy", "Vegan", "Mediterranean", "Gluten-Free"],
    author: "Elena Kostas",
    description: "Fresh and vibrant quinoa salad loaded with Mediterranean vegetables and herbs.",
    category: "Mediterranean",
    ingredients: [
      "200g quinoa",
      "Cherry tomatoes",
      "Cucumber",
      "Red onion",
      "Kalamata olives",
      "Fresh parsley",
      "Feta cheese",
      "Olive oil",
      "Lemon juice"
    ],
    instructions: [
      "Rinse quinoa and cook according to package instructions",
      "Let quinoa cool completely",
      "Dice tomatoes, cucumber, and red onion",
      "Chop fresh parsley",
      "Combine quinoa with vegetables",
      "Whisk olive oil and lemon juice for dressing",
      "Toss salad with dressing",
      "Top with crumbled feta and olives"
    ]
  },
  {
    id: "4",
    title: "Korean Bibimbap Bowl",
    image: pastaImage,
    cookTime: 40,
    servings: 2,
    difficulty: "medium",
    rating: 4.7,
    tags: ["Korean", "Rice Bowl", "Vegetables", "Spicy"],
    author: "Kim Min-jun",
    description: "Traditional Korean mixed rice bowl with seasoned vegetables and gochujang sauce.",
    category: "Asian",
    ingredients: [
      "2 cups cooked rice",
      "Shiitake mushrooms",
      "Bean sprouts",
      "Carrots",
      "Spinach",
      "2 eggs",
      "Gochujang paste",
      "Sesame oil",
      "Soy sauce"
    ],
    instructions: [
      "Prepare rice and keep warm",
      "Sauté each vegetable separately with seasoning",
      "Fry eggs sunny side up",
      "Arrange vegetables over rice in sections",
      "Top with fried egg",
      "Serve with gochujang sauce on the side",
      "Mix everything together before eating"
    ]
  },
  {
    id: "5",
    title: "Thai Green Curry",
    image: saladImage,
    cookTime: 35,
    servings: 4,
    difficulty: "medium",
    rating: 4.8,
    tags: ["Thai", "Curry", "Coconut", "Spicy"],
    author: "Siriporn Nakamura",
    description: "Aromatic Thai green curry with coconut milk, vegetables, and fragrant herbs.",
    category: "Asian",
    ingredients: [
      "Green curry paste",
      "Coconut milk",
      "Chicken or tofu",
      "Thai eggplant",
      "Green beans",
      "Thai basil",
      "Fish sauce",
      "Palm sugar",
      "Lime leaves"
    ],
    instructions: [
      "Heat oil in a wok or large pan",
      "Fry curry paste until fragrant",
      "Add thick coconut milk and stir",
      "Add protein and cook until done",
      "Add vegetables and remaining coconut milk",
      "Season with fish sauce and palm sugar",
      "Add Thai basil and lime leaves",
      "Serve with jasmine rice"
    ]
  },
  {
    id: "6",
    title: "Mexican Street Tacos",
    image: cakeImage,
    cookTime: 30,
    servings: 4,
    difficulty: "easy",
    rating: 4.7,
    tags: ["Mexican", "Street Food", "Quick", "Spicy"],
    author: "Carlos Mendez",
    description: "Authentic Mexican street tacos with marinated meat and fresh toppings.",
    category: "Mexican",
    ingredients: [
      "Corn tortillas",
      "Carne asada or chicken",
      "White onion",
      "Cilantro",
      "Lime",
      "Salsa verde",
      "Cotija cheese",
      "Radishes"
    ],
    instructions: [
      "Marinate meat with spices",
      "Grill meat until charred and cooked through",
      "Warm tortillas on griddle",
      "Slice meat thinly",
      "Fill tortillas with meat",
      "Top with onion and cilantro",
      "Serve with lime and salsa",
      "Garnish with cheese and radishes"
    ]
  }
];

export const getFilteredRecipes = (
  recipes: Recipe[],
  searchQuery: string,
  category: string,
  difficulty: string,
  cookTime: string
) => {
  return recipes.filter(recipe => {
    const matchesSearch = searchQuery === "" || 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = category === "All Cuisines" || recipe.category === category;

    const matchesDifficulty = difficulty === "all" || recipe.difficulty === difficulty;

    const matchesCookTime = 
      cookTime === "all" ||
      (cookTime === "quick" && recipe.cookTime < 30) ||
      (cookTime === "medium" && recipe.cookTime >= 30 && recipe.cookTime <= 60) ||
      (cookTime === "long" && recipe.cookTime > 60);

    return matchesSearch && matchesCategory && matchesDifficulty && matchesCookTime;
  });
};