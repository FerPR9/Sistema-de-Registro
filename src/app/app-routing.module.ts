import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistroParticipanteComponent } from './components/registro-participante/registro-participante.component';
import { TalleresComponent } from './components/talleres/talleres.component';
import { ConferenciasComponent } from './components/conferencias/conferencias.component';
import { ListaParticpantesComponent} from './components/lista-particpantes/lista-particpantes.component';
import { ListaConferenciasComponent } from './components/lista-conferencias/lista-conferencias.component';
import { ListaTallerComponent } from './components/lista-taller/lista-taller.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: 'registro-participante', component: RegistroParticipanteComponent },
  { path: 'talleres', component: TalleresComponent },
  { path: 'conferencias', component: ConferenciasComponent },
  { path: 'lista-participantes', component: ListaParticpantesComponent },
  { path: 'lista-conferencias', component: ListaConferenciasComponent},
  { path: 'lista-taller', component: ListaTallerComponent},
  { path: 'incio', component: InicioComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
