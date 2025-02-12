import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { CreateRecipeComponent } from './recipe/create-recipe/create-recipe.component';
import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { DeleteConfirmDialogComponent } from './recipe/delete-confirm-dialog/delete-confirm-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    CreateRecipeComponent,
    EditRecipeComponent,
    DeleteConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: RecipeListComponent},
      {path: 'recipes', component: RecipeListComponent},
      {path: 'recipes/create', component: CreateRecipeComponent},
      {path: 'recipes/edit/:id', component: EditRecipeComponent}
    ]),
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
