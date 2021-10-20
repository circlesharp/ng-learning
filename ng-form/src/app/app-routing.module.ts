import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/reactive-form', pathMatch: 'full'},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'template-driven-form', component: TemplateDrivenFormComponent},
  {path: 'name-editor', component: NameEditorComponent},
  {path: 'profile-editor', component: ProfileEditorComponent},
  {path: 'nested-form', component: NestedFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
