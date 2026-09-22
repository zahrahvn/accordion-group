import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appAccordingBody]',
  standalone: true,
})
export class AccordingBodyDirective {

  constructor( public template: TemplateRef<unknown>) {}
}
