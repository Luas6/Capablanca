export interface Noticia {
  id: number;
  slug: string;
  titulo: string;
  extracto: string;
  contenido: string[];
  fecha: string;
  autor: string;
  fuente: string;
  fuenteUrl: string;
  etiquetas: string[];
}
