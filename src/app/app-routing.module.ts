import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeListComponent} from "./recipe/recipe-list/recipe-list.component";
import {CreateRecipeComponent} from "./recipe/create-recipe/create-recipe.component";
import {EditRecipeComponent} from "./recipe/edit-recipe/edit-recipe.component";

const routes: Routes = [
  {path: '', component: RecipeListComponent},
  {path: 'recipes', component: RecipeListComponent},
  {path: 'recipes/create', component: CreateRecipeComponent},
  {path: 'recipes/edit/:id', component: EditRecipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
