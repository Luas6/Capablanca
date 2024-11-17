import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JoseRaulCapablancaComponent } from './jose-raul-capablanca/jose-raul-capablanca.component';
import { MiembrosComponent } from './miembros/miembros.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'homenaje-a-capablanca', component: JoseRaulCapablancaComponent },
  { path: 'miembros', component: MiembrosComponent },
  { path: 'blog', component: BlogComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
