import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { IndexComponent } from './componentes/index/index.component';
import { ErrorComponent } from './componentes/error/error.component';
import { EditarAcercadeComponent } from './modales/editar-acercade/editar-acercade.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:'', component:IndexComponent, canActivate:[GuardGuard]},
  {path:'login', component:LoginComponent},
  {path:'editar-acercade', component:EditarAcercadeComponent},
  {path:'**', component:ErrorComponent}


];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
