import { Component } from '@angular/core';
import { AccorionGroupComponent } from './shared/components/accorion-group/accorion-group.component';
import { AccorgingPanelComponent } from './shared/components/accorging-panel/accorging-panel.component';
import { AccordingBodyDirective } from './shared/according-body.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccorionGroupComponent,AccorgingPanelComponent,AccordingBodyDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'accordion-group';
}
