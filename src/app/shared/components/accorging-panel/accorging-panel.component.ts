import {
  Component,
  ContentChild,
  inject,
  Input,
  signal,
  TemplateRef,
} from '@angular/core';
import { AccorionGroupComponent } from '../accorion-group/accorion-group.component';
import { NgTemplateOutlet } from '@angular/common';
import { AccordingBodyDirective } from '../../according-body.directive';

@Component({
  selector: 'app-accorging-panel',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './accorging-panel.component.html',
  styleUrl: './accorging-panel.component.scss',
})
export class AccorgingPanelComponent   {
  @Input() title = '';
  @ContentChild(AccordingBodyDirective) body!:AccordingBodyDirective
  isOpen = signal(false);

  #group = inject(AccorionGroupComponent);
  constructor() {
    this.#group.register(this);
  }


  open() {
    this.isOpen.set(true);
  }
  close() {
    this.isOpen.set(false);
  }
  toggle() {
    if (this.isOpen()) this.close();
    else {
      this.#group.openPanel(this);
    }
  }
}
