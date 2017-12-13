import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PERSONAJES } from '../../data/personajes.data';
import { Personaje } from '../../interfaces/personaje.interface';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personajes : Personaje[] = [];

  constructor(public navCtrl: NavController) {
    this.personajes = PERSONAJES;
  }

  detail(personaje : Personaje){
    this.navCtrl.push(DetailPage,{'personaje':personaje});
  }



}
