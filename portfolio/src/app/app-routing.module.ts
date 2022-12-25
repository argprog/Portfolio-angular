import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { IndexComponent } from './componentes/index/index.component';
import { ErrorComponent } from './componentes/error/error.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'login', component:LoginComponent},
  {path:'**', component:ErrorComponent},


];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
