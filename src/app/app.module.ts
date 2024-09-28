import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
//componetes 
import { AppComponent } from './app.component';
import { RegistroParticipanteComponent } from './components/registro-participante/registro-participante.component';
import { TalleresComponent } from './components/talleres/talleres.component';
import { ConferenciasComponent } from './components/conferencias/conferencias.component';
import { ListaParticpantesComponent} from './components/lista-particpantes/lista-particpantes.component';
import { ListaConferenciasComponent } from './components/lista-conferencias/lista-conferencias.component';
import { ListaTallerComponent } from './components/lista-taller/lista-taller.component';
import { InicioComponent } from './components/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroParticipanteComponent,
    TalleresComponent,
    ConferenciasComponent,
    ListaParticpantesComponent,
    ListaConferenciasComponent,
    ListaTallerComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
