import { Component } from '@angular/core';
import { NoticiasService } from '../actualidad/noticias.service';
import { Noticia } from '../actualidad/noticia.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  noticiaDestacada: Noticia | undefined;

  constructor(noticiasService: NoticiasService) {
    this.noticiaDestacada = noticiasService.obtenerNoticias()[0];
  }
}
