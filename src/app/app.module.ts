import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PieComponent } from './components/pie/pie.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { ListadoArtistasComponent } from './components/listado-artistas/listado-artistas.component';
import { FormularioNuevoArtistaComponent } from './components/forms/form-nuevo-artista/form-nuevo-artistas.component';
import { DiscosComponent } from './components/discos/discos.component';
import { FormNuevoDiscoComponent } from './components/forms/form-nuevo-disco/form-nuevo-disco.component';



import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'

import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { InfoArtistaComponent } from './components/detalles/info-artista/info-artista.component';
import { ListadoDiscosComponent } from './components/listado-discos/listado-discos.component';
import { FilterPipeArtistas } from './components/pipes/artistas.filter.pipe';
import {  FilterPipeDiscos  } from './components/pipes/discos.filter.pipe';
import { InfoDiscosComponent } from './components/detalles/info-discos/info-discos.component';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    ListadoArtistasComponent,
    ArtistasComponent,
    FormularioNuevoArtistaComponent,
    HomeComponent,
    InfoArtistaComponent,
    DiscosComponent,
    FormNuevoDiscoComponent,
    ListadoDiscosComponent,
    FilterPipeArtistas,
    FilterPipeDiscos,
    InfoDiscosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
