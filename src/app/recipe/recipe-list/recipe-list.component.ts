import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  recipes: any[] = [];
  searchTerm: string = '';

  constructor(
    private recipeService: RecipeService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  get filteredRecipes() {
    return this.recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteRecipe(id: string): void {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recipeService.deleteRecipe(id);
        this.recipes = this.recipeService.getRecipes();
      }
    });
  }
}
