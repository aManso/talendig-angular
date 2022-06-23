import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Clase2PeriodicoComponent } from './clase2-periodico/clase2-periodico.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SeccionComponent } from './clase2-periodico/seccion/seccion.component';
import { ComentariosComponent } from './clase2-periodico/comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    Clase2PeriodicoComponent,
    MenuComponent,
    SeccionComponent,
    ComentariosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
