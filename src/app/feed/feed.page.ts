import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  //variáveis
  public nomeUsuario:string = "Lari Barros";

  constructor() { }

  ngOnInit() {
    //chama função
    //this.somaDoisNumeros(7, 10);
  }

  //funções
  public somaDoisNumeros(n1:number, n2:number): void {
    alert(n1 + n2);
  }

}
