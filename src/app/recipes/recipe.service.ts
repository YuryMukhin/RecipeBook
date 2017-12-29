import {EventEmitter, Injectable} from "@angular/core";

import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/inredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A Test',
      'simple Test',
      'https://s0.tchkcdn.com/g-zZjwyX6DB5EAu6xGo9sdOQ/13/101793/660x480/f/0/89565_shutterstock_65948899.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Second test',
      'simple Test !',
      'https://s0.tchkcdn.com/g-zZjwyX6DB5EAu6xGo9sdOQ/13/101793/660x480/f/0/89565_shutterstock_65948899.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngrToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
