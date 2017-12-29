import {Ingredient} from "../shared/inredient.model";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imgPath: string, inrgs: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
    this.ingredients = inrgs;
  }
}
