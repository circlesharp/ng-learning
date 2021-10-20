import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  public profileForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.initProfileForm();
  }

  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe(console.log);
  }

  public patchProfile() {
    // replace any
    this.profileForm.patchValue({
      firstName: 'PatchValue',
      address: {
        street: 'Patch Value',
      },
    });
  }

  public setProfile() {
    // strictly adheres to the structure of the form group and replaces the entire value for the control.
    const formValue = JSON.parse(JSON.stringify(this.profileForm.value));
    formValue.firstName = 'SetValue';
    formValue.address.street = 'Set Value';
    
    this.profileForm.setValue(formValue);
  }

  public onSubmit() {
    console.warn('fire submit', this.profileForm.value);
  }

  private initProfileForm() {
    // the individual form controls are now collected within a group.
    const isUseFormGroup = true;

    if (isUseFormGroup) {
      this.profileForm = new FormGroup({
        firstName: new FormControl('Tan', Validators.required),
        lastName: new FormControl('Rongzhao'),
        address: new FormGroup({
          street: new FormControl('street'),
          city: new FormControl('city'),
        }),
      });
    } else {
      this.profileForm = this.formBuilder.group({
        firstName: ['fb first name'],
        lastName: ['fb last name'],
        address: this.formBuilder.group({
          street: [''],
          city: [''],
        }),
      });
    }
  }

}
