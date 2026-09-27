import { Injectable } from '@angular/core';
import { Noticia } from './noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private noticias: Noticia[] = [
    {
      id: 1,
      slug: 'saul-matias-jimenez-campeon-iii-campeonato-virgen-de-la-encina',
      titulo: 'Saúl Matías Jiménez se corona campeón del III Campeonato de Ajedrez Virgen de la Encina de Macotera',
      extracto: 'La Plaza Mayor de Macotera acogió este domingo la tercera edición del campeonato, organizada por la Asociación Me Permito y el colectivo Mundy de Peñaranda, con la colaboración del Ayuntamiento.',
      contenido: [
        'La Plaza Mayor de Macotera fue este pasado domingo el escenario del III Campeonato de Ajedrez "Virgen de la Encina", una cita deportiva y cultural que reunió a numerosos ajedrecistas y aficionados en el corazón de la localidad. La jornada, organizada de manera conjunta por la Asociación Me Permito de Macotera y la Asociación de Ajedrez Mundy de Peñaranda de Bracamonte, contó además con la colaboración del Ayuntamiento de la villa.',
        'En el plano competitivo, el salmantino Saúl Matías Jiménez se alzó con el título absoluto del torneo tras firmar una actuación impecable a lo largo de toda la jornada. El presidente de la Federación de Ajedrez de Salamanca fue el encargado de hacerle entrega del trofeo que lo acreditaba como vencedor de esta tercera edición.',
        'El podio estuvo protegido en su totalidad por jugadores salmantinos. Claudio Suárez ocupó la segunda posición, recibiendo su galardón de manos de Antonia Bueno, responsable y organizadora de la prueba por parte de la Asociación Me Permito. El tercer cajón del podio recayó en Javier Ángel Sánchez, quien recibió su trofeo de manos de Marcelino Orgaz, concejal del Ayuntamiento de Macotera.',
        'El éxito de participación y la ambiente vivido en la Plaza Mayor refuerzan el arraigo del ajedrez en la provincia y animan a los organizadores a continuar con esta cita, que año tras año consolida a Macotera como punto de encuentro para los aficionados de la comarca.'
      ],
      fecha: '7 de septiembre de 2026',
      autor: 'Jorge Holguera Illera',
      fuente: 'La Gaceta de Salamanca',
      fuenteUrl: 'https://www.lagacetadesalamanca.es/provincia/samuel-matias-jimenez-corona-campeon-iii-campeonato-20260907175430-ga.html',
      etiquetas: ['Ajedrez', 'Macotera', 'Peñaranda y Las Villas', 'Salamanca']
    }
  ];

  obtenerNoticias(): Noticia[] {
    return this.noticias;
  }

  obtenerNoticiaPorSlug(slug: string): Noticia | undefined {
    return this.noticias.find(noticia => noticia.slug === slug);
  }
}
