import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  goToTabPages() {
    this.router.navigate(['/tabs/tab1']);
  }

}
