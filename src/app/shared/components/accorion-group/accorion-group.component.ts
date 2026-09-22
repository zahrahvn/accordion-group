import { Component, Input, signal } from '@angular/core';
import { AccorgingPanelComponent } from '../accorging-panel/accorging-panel.component';

@Component({
  selector: 'app-accorion-group',
  standalone: true,
  imports: [],
  templateUrl: './accorion-group.component.html',
  styleUrl: './accorion-group.component.scss',
})
export class AccorionGroupComponent {
  @Input() multi = false;
  #panels = signal<AccorgingPanelComponent[]>([]);
  register(panel: AccorgingPanelComponent) {
    this.#panels.update((panels) => [...panels, panel]);
  }
  unRegiste(panel: AccorgingPanelComponent) {
    this.#panels.update((panels) => panels.filter((p) => p !== panel));
  }
  openPanel(panel: AccorgingPanelComponent) {
    if (!this.multi) {
      this.#panels().forEach((p) => {
        if (p !== panel) p.close();
      });
    }
    panel.open();
  }
}
