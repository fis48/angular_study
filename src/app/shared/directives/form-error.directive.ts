import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFormError]'
})
export class FormErrorDirective implements OnInit {

  fieldElement:ElementRef<HTMLElement>;
  @Input() color:string = "red";
  @Input() errMsg:string = "Required field";

  constructor(
    private element: ElementRef<HTMLElement>
  ) { 
    this.fieldElement = element ;
  }
  ngOnInit(): void {
    this.setColor();
    this.setErrMsg();
  }

  setColor() {
    this.fieldElement.nativeElement.style.color = this.color;
    this.fieldElement.nativeElement.classList.add("form-text");
  }
  
  setErrMsg() {
    this.fieldElement.nativeElement.innerText = this.errMsg;
  }

}
