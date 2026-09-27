import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JoseRaulCapablancaComponent } from './jose-raul-capablanca/jose-raul-capablanca.component';
import { ActualidadComponent } from './actualidad/actualidad.component';
import { ArticuloComponent } from './actualidad/articulo.component';
import { ClubComponent } from './club/club.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JoseRaulCapablancaComponent,
    ActualidadComponent,
    ArticuloComponent,
    ClubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
