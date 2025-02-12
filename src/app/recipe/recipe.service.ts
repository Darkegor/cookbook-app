import { Injectable } from '@angular/core';

interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

interface Recipe {
  id: string;
  name: string;
  ingredients: Ingredient[];
  description: string;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipeKey = 'recipes';

  getRecipes(): Recipe[] {
    const storedRecipes = localStorage.getItem(this.recipeKey);
    return storedRecipes ? JSON.parse(storedRecipes) : [];
  }

  saveRecipes(recipes: Recipe[]): void {
    localStorage.setItem(this.recipeKey, JSON.stringify(recipes));
  }

  addRecipe(recipe: Recipe): void {
    const recipes = this.getRecipes();
    recipes.push(recipe);
    this.saveRecipes(recipes);
  }

  updateRecipe(id: string, updatedRecipe: Recipe): void {
    const recipes = this.getRecipes();
    const index = recipes.findIndex((recipe) => recipe.id === id);
    if (index !== -1) {
      recipes[index] = { ...updatedRecipe, id };
      this.saveRecipes(recipes);
    }
  }

  deleteRecipe(id: string): void {
    let recipes = this.getRecipes();
    recipes = recipes.filter((recipe) => recipe.id !== id);
    this.saveRecipes(recipes);
  }
}
