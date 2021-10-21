import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-form-validation',
  templateUrl: './built-in-form-validation.component.html',
  styleUrls: ['./built-in-form-validation.component.css']
})
export class BuiltInFormValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public handleSubmit(event: any) {
    console.log(event);
  }

}
