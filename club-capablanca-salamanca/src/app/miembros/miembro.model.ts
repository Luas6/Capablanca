export interface Miembro {
    nombre: string;
    rating: number;
    descripcion: string;
    fideLink: string;
    rutaFoto: string;
    opcional?: {
      link: string;
      nombrelink: string;
    };
  }