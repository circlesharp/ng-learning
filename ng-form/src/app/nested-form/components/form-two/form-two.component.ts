import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.css']
})
export class FormTwoComponent implements OnInit {
  public formTwoFormGroup = new FormGroup({
    twoCtrl: new FormControl('two value', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {}

}