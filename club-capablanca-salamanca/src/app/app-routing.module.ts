import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JoseRaulCapablancaComponent } from './jose-raul-capablanca/jose-raul-capablanca.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'homenaje-a-capablanca', component: JoseRaulCapablancaComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
