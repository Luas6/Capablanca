import { Component } from '@angular/core';
import { NoticiasService } from './noticias.service';
import { Noticia } from './noticia.model';

@Component({
  selector: 'app-actualidad',
  templateUrl: './actualidad.component.html',
  styleUrls: ['./actualidad.component.css']
})
export class ActualidadComponent {
  noticias: Noticia[];

  constructor(private noticiasService: NoticiasService) {
    this.noticias = this.noticiasService.obtenerNoticias();
  }
}
