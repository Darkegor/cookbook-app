import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

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
  createdAt: Date;
}

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.sass']
})
export class CreateRecipeComponent {
  recipe: Recipe = {
    id: '',
    name: '',
    ingredients: [],
    description: '',
    image: "",
    createdAt: new Date(),
  };
  units: string[] = ['г', 'кг', 'мл', 'л', 'кружка', 'ч. ложка', 'ст. ложка'];

  addIngredient() {
    this.recipe.ingredients.push({ name: "", amount: 0, unit: this.units[0] });
  }

  saveRecipe() {
    this.recipe.id = Math.floor(Math.random() * 1000000).toString();
    this.recipeService.addRecipe(this.recipe);
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.recipe.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  constructor(private recipeService: RecipeService) {}
}
