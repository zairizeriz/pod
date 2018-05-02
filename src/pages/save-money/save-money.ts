import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CardPaymentPage} from '../card-payment/card-payment';

/**
 * Generated class for the SaveMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-save-money',
  templateUrl: 'save-money.html',
})
export class SaveMoneyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaveMoneyPage');
  }

  save(){
  this.navCtrl.push(CardPaymentPage);
}

}
