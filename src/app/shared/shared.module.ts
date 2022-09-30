import { NgModule } from '@angular/core';
import { FormErrorDirective } from './directives/form-error.directive';


@NgModule({
  declarations: [
    FormErrorDirective
  ],
  exports: [
    FormErrorDirective,
  ],
})
export class SharedModule { }
