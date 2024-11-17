import { Component, OnInit } from '@angular/core';

declare var Chessboard: any; // Declaramos que Chessboard existe

@Component({
  selector: 'app-jose-raul-capablanca',
  templateUrl: './jose-raul-capablanca.component.html',
  styleUrls: ['./jose-raul-capablanca.component.css']
})
export class JoseRaulCapablancaComponent implements OnInit{

  ngOnInit() {
    const capablancaVSLaskerLondon1913 = '8/7p/p7/4kpPP/3p4/3K4/P7/8';
    const board = Chessboard('myBoard1',capablancaVSLaskerLondon1913);
    //board.start(); // Inicializa el tablero vacío

    const capablancaVSSouzaSaoPaulo1927 = '3r2k1/pb1p1rp1/1pn2pp1/2qNp1B1/2B1P3/7R/PPP2PPP/3R2K1';
    const board2 = Chessboard('myBoard2',capablancaVSSouzaSaoPaulo1927);
  }

}
