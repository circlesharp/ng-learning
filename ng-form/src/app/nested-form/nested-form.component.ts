import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormOneComponent } from './components/form-one/form-one.component';
import { FormTwoComponent } from './components/form-two/form-two.component';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {
  @ViewChild('refFormOne', {static: true})
  refFormOne!: FormOneComponent;
  @ViewChild('refFormTwo', {static: true})
  refFormTwo!: FormTwoComponent;

  public totalFormGroup = new FormGroup({
    selfCtrl: new FormControl('self value', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
    this.updateTotalFormGroup();   
  }

  public handleChangeWholeForm() {
    const formGroupValue = JSON.parse(JSON.stringify(this.totalFormGroup.value));
    formGroupValue.selfCtrl = 'new self';
    formGroupValue.formOne.oneCtrl = 'new one';
    formGroupValue.formTwo.twoCtrl = '';
    this.totalFormGroup.setValue(formGroupValue);
  }

  public handleSubmit() {
    console.warn('submit', this.totalFormGroup.value);
  }

  private updateTotalFormGroup() {
    this.totalFormGroup.addControl('formOne', this.refFormOne.formOneFormGroup);
    this.totalFormGroup.addControl('formTwo', this.refFormTwo.formTwoFormGroup);
  }
}
