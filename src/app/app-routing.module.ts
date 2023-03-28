import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRetroComponent } from './add-retro/add-retro.component';
import { ListRetroComponent } from './list-retro/list-retro.component';
import { UpdateRetroComponent } from './update-retro/update-retro.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    component: AddRetroComponent,
    path: 'add'
  },
  {
    component: UpdateRetroComponent,
    path: 'update/:id'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  },
  {
    component: ListRetroComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
