import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JoseRaulCapablancaComponent } from './jose-raul-capablanca/jose-raul-capablanca.component';
import { ActualidadComponent } from './actualidad/actualidad.component';
import { ArticuloComponent } from './actualidad/articulo.component';
import { ClubComponent } from './club/club.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'club', component: ClubComponent },
  { path: 'actualidad', component: ActualidadComponent },
  { path: 'actualidad/:slug', component: ArticuloComponent },
  { path: 'homenaje-a-capablanca', component: JoseRaulCapablancaComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
