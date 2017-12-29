import {Ingredient} from "../shared/inredient.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs/Subject";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 4),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingr: Ingredient) {
    this.ingredients.push(ingr);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingrs: Ingredient[]) {
    this.ingredients.push(...ingrs);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
