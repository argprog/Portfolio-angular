import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { IndexComponent } from './componentes/index/index.component';
import { ErrorComponent } from './componentes/error/error.component';
import { EditarAcercadeComponent } from './modales/editar-acercade/editar-acercade.component';
import { NuevaExperienciaComponent } from './modales/nueva-experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './modales/editar-experiencia/editar-experiencia.component';
import { NuevaEducacionComponent } from './modales/nueva-educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './modales/editar-educacion/editar-educacion.component';
import { NuevoIdiomaComponent } from './modales/nuevo-idioma/nuevo-idioma.component';
import { EditarIdiomaComponent } from './modales/editar-idioma/editar-idioma.component';
import { NuevaHabilidadComponent } from './modales/nueva-habilidad/nueva-habilidad.component';
import { EditarHabilidadComponent } from './modales/editar-habilidad/editar-habilidad.component';
import { NuevoProyectoComponent } from './modales/nuevo-proyecto/nuevo-proyecto.component';
import { EditarProyectoComponent } from './modales/editar-proyecto/editar-proyecto.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:'', component:IndexComponent}, //canActivate:[GuardGuard]},
  {path:'login', component:LoginComponent},
  {path:'editar-acercade/:id', component:EditarAcercadeComponent},
  {path:'experiencias/crear', component:NuevaExperienciaComponent},
  {path:'editar-experiencia/:id', component:EditarExperienciaComponent},
  {path:'educacion/crear', component:NuevaEducacionComponent},
  {path:'editar-educacion/:id', component:EditarEducacionComponent},
  {path:'idiomas/crear', component:NuevoIdiomaComponent},
  {path:'editar-idiomas/:id', component:EditarIdiomaComponent},
  {path:'habilidades/crear', component:NuevaHabilidadComponent},
  {path:'editar-habilidades/:id', component:EditarHabilidadComponent},
  {path:'proyectos/crear', component:NuevoProyectoComponent},
  {path:'editar-proyectos/:id', component:EditarProyectoComponent},
  {path:'**', component:ErrorComponent} //dejar siempre como última ruta


];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
