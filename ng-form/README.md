# NgForm

## concepts

1. FormControl: tracks the value and validation status of an individual form control.
2. FormGroup: tracks the same values and status for a collection of form controls.
3. FormArray: tracks the same values and status for an array of form controls.
4. ControlValueAccessor: creates a bridge between Angular FormControl instances and native DOM elements.

## Data flow

### view-to-model of reactive forms

1. The user types a value into the input element, in this case the favorite color Blue.
2. The form input element emits an "input" event with the latest value.
3. The control value accessor listening for events on the form input element immediately relays the new value to the FormControl instance.
4. The FormControl instance emits the new value through the valueChanges observable.
5. Any subscribers to the valueChanges observable receive the new value.

### model-to-view of reactive forms

1. The user calls the favoriteColorControl.setValue() method, which updates the FormControl value.
2. The FormControl instance emits the new value through the valueChanges observable.
3. Any subscribers to the valueChanges observable receive the new value.
4. The control value accessor on the form input element updates the element with the new value.

### view-to-model of template-driven forms

1. The user types Blue into the input element.
2. The input element emits an "input" event with the value Blue.
3. The control value accessor attached to the input triggers the setValue() method on the FormControl instance.
4. The FormControl instance emits the new value through the valueChanges observable.
5. Any subscribers to the valueChanges observable receive the new value.
6. The control value accessor also calls the NgModel.viewToModelUpdate() method which emits an ngModelChange event.
7. Because the component template uses two-way data binding for the favoriteColor property, the favoriteColor property in the component is updated to the value emitted by the ngModelChange event (Blue).

### model-to-view of template-driven forms

1. The favoriteColor value is updated in the component.
2. Change detection begins.
3. During change detection, the ngOnChanges lifecycle hook is called on the NgModel directive instance because the value of one of its inputs has changed.
4. The ngOnChanges() method queues an async task to set the value for the internal FormControl instance.
5. Change detection completes.
6. On the next tick, the task to set the FormControl instance value is executed.
7. The FormControl instance emits the latest value through the valueChanges observable.
8. Any subscribers to the valueChanges observable receive the new value.
9. The control value accessor updates the form input element in the view with the latest favoriteColor value.

## Detail of reactive forms

### Adding a basic form control

1. Register the reactive forms module in your application. This module declares the reactive-form directives that you need to use reactive forms.
2. Generate a new FormControl instance and save it in the component.
3. Register the FormControl in the template.

### Grouping form controls

#### form group

A form group defines a form with a fixed set of controls that you can manage together. You can also nest form groups to create more complex forms.

#### form array

A form array defines a dynamic form, where you can add and remove controls at run time. You can also nest form arrays to create more complex forms.

#### Adding a form control

1. Create a FormGroup instance (new FormGroup, this.formBuilder.group).
2. Associate the FormGroup model and view.
3. Save the form data (should consider the validation).

#### Creating nested form groups

1. Create a nested group.
2. Group the nested form in the template.

#### Updating parts of data model

1. Use the setValue() method to set a new value for an individual control. The setValue() method strictly adheres to the structure of the form group and replaces the entire value for the control.
2. Use the patchValue() method to replace any properties defined in the object that have changed in the form model.
3. The strict checks of the setValue() method help catch nesting errors in complex forms, while patchValue() fails silently on those errors.

#### Validating form input

1. Import a validator function in your form component.
2. Add the validator to the field in the form.
3. Add logic to handle the validation status.
