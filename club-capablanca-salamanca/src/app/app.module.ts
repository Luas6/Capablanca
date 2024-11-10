import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JoseRaulCapablancaComponent } from './jose-raul-capablanca/jose-raul-capablanca.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JoseRaulCapablancaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
