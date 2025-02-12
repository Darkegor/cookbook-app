import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

interface Recipe {
  id: string;
  name: string;
  ingredients: any[];
  description: string;
  image?: string;
}

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.sass']
})
export class EditRecipeComponent {
  recipe: Recipe | null = null;
  units: string[] = ['г', 'кг', 'мл', 'л', 'кружка', 'ч. ложка', 'ст. ложка'];

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const recipes: Recipe[] = this.recipeService.getRecipes();
      this.recipe = recipes.find((r) => r.id === id) || {
        id: '',
        name: '',
        ingredients: [],
        description: '',
        image: ''
      };
    }
  }

  saveRecipe(): void {
    if (this.recipe) {
      this.recipeService.updateRecipe(this.recipe.id, this.recipe);
      this.router.navigate(['/recipes']);
    }
  }
}
