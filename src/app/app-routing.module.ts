import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { DetailsComponent } from './details/details.component';
import { FormsComponent } from './forms/forms.component';
import { ListComponent } from './list/list.component';
import { MyformComponent } from './myform/myform.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  {path:'',redirectTo:"/list",pathMatch:"full"},
  {path:"list",component:ListComponent},
  {path:'details',component:DetailsComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"forms",component:FormsComponent},
  {path:"reactiveForms",component:ReactiveFormsComponent},
  {path:"myform",component:MyformComponent},
  {path:"angular",component:AngularComponent},
  {path:"promise",component:PromiseComponent},
  {path:"observable",component:ObservableComponent},
  {path:"bootstrap",component:BootstrapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
