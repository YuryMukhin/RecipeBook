import {Directive, ElementRef, HostBinding, HostListener, OnDestroy, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen = false;

  ngOnInit(): void {
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
