import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';

/**
 * Generated class for the SuccessPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-success-payment',
  templateUrl: 'success-payment.html',
})
export class SuccessPaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessPaymentPage');
  }
afterPaymentComplete(){
	this.navCtrl.setRoot(HomePage);
}
}
