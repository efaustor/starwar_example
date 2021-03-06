import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  personaje:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personaje = this.navParams.get("personaje");
  }

  back(){
    this.navCtrl.pop();
  }

}
