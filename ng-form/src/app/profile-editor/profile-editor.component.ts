import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  // profileForm = new FormGroup({
  //   // the individual form controls are now collected within a group.
  //   firstName: new FormControl('Tan'),
  //   lastName: new FormControl('Rongzhao'),
  //   address: new FormGroup({
  //     street: new FormControl('street'),
  //     city: new FormControl('city'),
  //     state: new FormControl('state'),
  //     zip: new FormControl('zip'),
  //   }),
  // });

  profileForm = this.fb.group({
    firstName: ['fb first name'],
    lastName: ['fb last name'],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  patchProfile() {
    // replace any
    this.profileForm.patchValue({
      firstName: 'PatchValue',
      address: {
        street: 'Patch Value',
      },
    });
  }

  setProfile() {
    // strictly adheres to the structure of the form group
    // and replaces the entire value for the control.

    const formValue = JSON.parse(JSON.stringify(this.profileForm.value));
    formValue.firstName = 'SetValue';
    formValue.address.street = 'Set Value';
    
    this.profileForm.setValue(formValue);
  }

  onSubmit() {
    // todo
    console.warn('fire submit', this.profileForm.value);
  }
}
