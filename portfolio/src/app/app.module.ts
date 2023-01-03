import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { IdiomasComponent } from './componentes/idiomas/idiomas.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './componentes/login/login.component';
import { IndexComponent } from './componentes/index/index.component';
import { ErrorComponent } from './componentes/error/error.component';
import { InterceptorService } from './servicios/interceptor.service';
import { EditarAcercadeComponent } from './modales/editar-acercade/editar-acercade.component';
import { NuevaExperienciaComponent } from './modales/nueva-experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './modales/editar-experiencia/editar-experiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    IdiomasComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    LoginComponent,
    IndexComponent,
    ErrorComponent,
    EditarAcercadeComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
   
  ],
  imports: [
    
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,  
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [PortfolioService,
  {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
