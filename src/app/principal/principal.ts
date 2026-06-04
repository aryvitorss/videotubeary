import { Contato } from './../contato/contato';
import { Sobre } from './../sobre/sobre';
import { Component } from '@angular/core';
import { Conteudo } from "../conteudo/conteudo";

@Component({
  selector: 'app-principal',
  imports: [Conteudo, Sobre, Contato],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal {

}
