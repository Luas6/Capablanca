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
    },
    {
      id: 2,
      slug: 'luis-martin-bronce-campeonato-espana-tramos-de-elo-2025',
      titulo: 'Luis Martín Mateos logra el bronce en el Campeonato de España por Tramos de Elo <2000',
      extracto: 'El salmantino firmó 6 victorias, 2 empates y 1 derrota en Hoznayo, con una actuación de 2150 puntos y una subida de 136 puntos de Elo.',
      contenido: [
        'El Campeonato de España por Tramos de Elo 2025 reunió en Hoznayo (Cantabria), del 6 al 11 de septiembre, a 266 jugadores divididos en tres torneos según su rating máximo en la temporada precedente: 2299 puntos para el grupo A, 1999 para el B y 1699 para el C. La competición se disputó a 9 rondas con ritmo estándar de 90 minutos más 30 segundos por jugada.',
        'Hasta el enclave cántabro se desplazaron 20 jugadores de nuestra comunidad, con un desempeño global muy bueno y subidas de Elo casi unánimes. Pero la gran actuación individual corrió a cargo del salmantino Luis Martín Mateos en el torneo sub 2000, el grupo más numeroso de la cita con 107 participantes.',
        'Martín Mateos sumó 6 victorias, 2 empates y una única derrota, precisamente ante el ganador del torneo, lo que le valió para colgarse la medalla de bronce. El salmantino viajó siempre en el grupo de cabeza y mantuvo opciones de pelear por el título hasta la última ronda.',
        'Su actuación se cifró en un rendimiento de 2150 puntos y una subida de 136 puntos de Elo, avales más que suficientes de la solidez de este talentoso jugador, miembro de la prometedora generación de jóvenes ajedrecistas de nuestra comunidad.'
      ],
      fecha: '11 de septiembre de 2025',
      autor: 'FECLA',
      fuente: 'FECLA - Federación Castellano-Leonesa de Ajedrez',
      fuenteUrl: 'https://fecla.es/2025/09/11/campeonato-espana-por-tramos-de-elo-2025/',
      etiquetas: ['Ajedrez', 'Campeonato de España', 'Elo', 'Salamanca']
    }
  ];

  obtenerNoticias(): Noticia[] {
    return this.noticias;
  }

  obtenerNoticiaPorSlug(slug: string): Noticia | undefined {
    return this.noticias.find(noticia => noticia.slug === slug);
  }
}
