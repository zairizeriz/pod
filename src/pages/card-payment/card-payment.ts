import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SuccessPaymentPage} from '../success-payment/success-payment';


/**
 * Generated class for the CardPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card-payment',
  templateUrl: 'card-payment.html',
})
export class CardPaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPaymentPage');
  }

  succesPayment(){
  this.navCtrl.push(SuccessPaymentPage);
}

}
