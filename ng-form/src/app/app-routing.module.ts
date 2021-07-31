import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/reactive-form', pathMatch: 'full'},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'template-driven-form', component: TemplateDrivenFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
