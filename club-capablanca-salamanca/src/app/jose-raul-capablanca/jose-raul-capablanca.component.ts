import { Component, OnInit } from '@angular/core';

declare var Chessboard: any;

@Component({
  selector: 'app-jose-raul-capablanca',
  templateUrl: './jose-raul-capablanca.component.html',
  styleUrls: ['./jose-raul-capablanca.component.css']
})
export class JoseRaulCapablancaComponent implements OnInit {

  ngOnInit() {
    const pieceTheme = 'assets/img/chesspieces/wikipedia/{piece}.png';

    const capablancaVSLaskerLondon1913 = '8/7p/p7/4kpPP/3p4/3K4/P7/8';
    Chessboard('myBoard1', {
      position: capablancaVSLaskerLondon1913,
      pieceTheme: pieceTheme
    });

    const capablancaVSSouzaSaoPaulo1927 = '3r2k1/pb1p1rp1/1pn2pp1/2qNp1B1/2B1P3/7R/PPP2PPP/3R2K1';
    Chessboard('myBoard2', {
      position: capablancaVSSouzaSaoPaulo1927,
      pieceTheme: pieceTheme
    });
  }

}
