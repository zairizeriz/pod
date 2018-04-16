import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerificationCodePage } from '../verification-code/verification-code';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the VerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html',
})
export class VerificationPage {
  phone_number:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public httpprovider:HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificationPage');
  }

  afterPhoneVerification() {
    // this.httpprovider.logout();
    this.navCtrl.push(VerificationCodePage);
  }

  getphone(){

    this.httpprovider.getCode(this.phone_number).then(
     (response) => {
       console.log(response)
       console.log(this.phone_number)
     },
     err => {
       console.log(err);
     },
   );
  }

}
