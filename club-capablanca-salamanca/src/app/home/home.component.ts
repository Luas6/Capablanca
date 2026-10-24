import { Component } from '@angular/core';
import { NoticiasService } from '../actualidad/noticias.service';
import { Noticia } from '../actualidad/noticia.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  noticiasDestacadas: Noticia[];

  constructor(noticiasService: NoticiasService) {
    this.noticiasDestacadas = noticiasService.obtenerNoticias().slice(0, 3);
  }
}
