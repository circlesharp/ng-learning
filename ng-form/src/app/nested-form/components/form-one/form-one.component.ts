import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css', '../../nested-form.component.css']
})
export class FormOneComponent implements OnInit {
  public formOneFormGroup = new FormGroup({
    oneCtrl: new FormControl('one value', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {}

}
