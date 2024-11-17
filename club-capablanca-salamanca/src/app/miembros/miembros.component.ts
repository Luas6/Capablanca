import { Component, OnInit } from '@angular/core';
import { Miembro } from './miembro.model';
import { HttpClient } from '@angular/common/http';
import { MIEMBROS } from './miembros';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.css']
})
export class MiembrosComponent implements OnInit {
  miembros: Miembro[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(){
    this.miembros = MIEMBROS;
  }

}
