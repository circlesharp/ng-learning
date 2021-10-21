import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { FormOneComponent } from './nested-form/components/form-one/form-one.component';
import { FormTwoComponent } from './nested-form/components/form-two/form-two.component';
import { ClientSideFormValidationComponent } from './client-side-form-validation/client-side-form-validation.component';
import { BuiltInFormValidationComponent } from './client-side-form-validation/components/built-in-form-validation/built-in-form-validation.component';
import { JavaScriptFormValidationComponent } from './client-side-form-validation/components/java-script-form-validation/java-script-form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    NestedFormComponent,
    FormOneComponent,
    FormTwoComponent,
    ClientSideFormValidationComponent,
    BuiltInFormValidationComponent,
    JavaScriptFormValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // register the reactive forms module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
