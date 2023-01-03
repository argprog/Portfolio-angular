import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { IndexComponent } from './componentes/index/index.component';
import { ErrorComponent } from './componentes/error/error.component';
import { EditarAcercadeComponent } from './modales/editar-acercade/editar-acercade.component';
import { GuardGuard } from './servicios/guard.guard';
import { NuevaExperienciaComponent } from './modales/nueva-experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './modales/editar-experiencia/editar-experiencia.component';

const routes: Routes = [
  {path:'', component:IndexComponent}, //canActivate:[GuardGuard]
  {path:'login', component:LoginComponent},
  {path:'editar-acercade/:id', component:EditarAcercadeComponent},
  {path:'experiencias/crear', component:NuevaExperienciaComponent},
  {path:'editar-experiencia/:id', component:EditarExperienciaComponent},
  {path:'**', component:ErrorComponent} //dejar siempre como última ruta


];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
