import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {CardPaymentPage} from '../card-payment/card-payment';
import { HttpProvider } from '../../providers/http/http'
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-save-money',
  templateUrl: 'save-money.html',
})
export class SaveMoneyPage {

  type:any
  amount_res:any
  amount:any
  paymentLink:any

  constructor(public navCtrl: NavController,private iab:InAppBrowser, public navParams: NavParams, private httpProvider:HttpProvider, public loading:LoadingController) {
  this.type = this.navParams.get('type')
  }

  ionViewDidLoad() {

    let loading = this.loading.create({
      spinner: 'ios',
      content: 'Loading Please Wait...'
    });
    loading.present()
    this.httpProvider.getSavingAmount(this.type).then(
      (response) => {
        console.log(response)
        this.amount_res = response
        this.amount = this.amount_res.toFixed(2)
        console.log(this.amount)
        loading.dismiss()
      },
      err => {
        console.log(err);
        loading.dismiss()
        
      },
    );
  }

  save(amount){
    console.log(amount)
    let loading = this.loading.create({
      spinner: 'ios',
      content: 'Loading Please Wait...'
    });
    loading.present()
    this.httpProvider.saving(amount).then(
      (response) => {

        this.paymentLink = response
        console.log(response)
        loading.dismiss()

        const browser = this.iab.create(this.paymentLink._body); 

      },
      err => {
        console.log(err);
        loading.dismiss()
        
      },
    );
  }
}
