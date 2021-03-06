import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path:'', loadChildren:'./login/login.module#LoginModule'},
  { path:'dashboard', loadChildren:'./dashboard/dashboard.module#DashboardModule'},
  { path:'signup', loadChildren:'./signup/signup.module#SignupModule'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
