import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioNuevoArtistaComponent} from './components/forms/form-nuevo-artista/form-nuevo-artistas.component';
import { HomeComponent } from './components/home/home.component';
import { InfoArtistaComponent } from './components/detalles/info-artista/info-artista.component';
import { ListadoArtistasComponent } from './components/listado-artistas/listado-artistas.component';
import { FormNuevoDiscoComponent } from './components/forms/form-nuevo-disco/form-nuevo-disco.component';
import { DiscosComponent } from './components/discos/discos.component';
import { ListadoDiscosComponent } from './components/listado-discos/listado-discos.component';
import { InfoDiscosComponent } from './components/detalles/info-discos/info-discos.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: HomeComponent}, 
  { path: 'formArtista', component: FormularioNuevoArtistaComponent },
  { path: 'formDisco', component: FormNuevoDiscoComponent },
  { path: 'artistas', component: ListadoArtistasComponent },
  { path: 'artistas/:artistasId', component: InfoArtistaComponent },
  { path: 'discos', component: ListadoDiscosComponent },
  { path: 'discos/:id', component: InfoDiscosComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
