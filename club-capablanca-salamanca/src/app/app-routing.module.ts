import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JoseRaulCapablancaComponent } from './jose-raul-capablanca/jose-raul-capablanca.component';
import { BlogComponent } from './blog/blog.component';
import { ClubComponent } from './club/club.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'club', component: ClubComponent },
  { path: 'actualidad', component: BlogComponent },
  { path: 'homenaje-a-capablanca', component: JoseRaulCapablancaComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
