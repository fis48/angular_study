import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.sass']
})
export class DirectivesComponent implements OnInit {

  testForm:FormGroup = this.formBuilder.group({
    email: ['', Validators.required] 
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  haveFormError(fieldName:string):boolean {
    return this.testForm.get(fieldName)?.invalid || false;
  }

}
