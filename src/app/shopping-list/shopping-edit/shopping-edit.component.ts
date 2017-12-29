import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/inredient.model';
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') nameInputRef: ElementRef;
  @ViewChild('amount') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const elName = this.nameInputRef.nativeElement.value;
    const elAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(elName, elAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
