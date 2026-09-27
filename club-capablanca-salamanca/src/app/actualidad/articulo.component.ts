import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from './noticias.service';
import { Noticia } from './noticia.model';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  noticia: Noticia | undefined;

  constructor(
    private route: ActivatedRoute,
    private noticiasService: NoticiasService
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.noticia = this.noticiasService.obtenerNoticiaPorSlug(slug);
    }
  }
}
