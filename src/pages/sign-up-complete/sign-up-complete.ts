import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';

/**
 * Generated class for the SignUpCompletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up-complete',
  templateUrl: 'sign-up-complete.html',
})
export class SignUpCompletePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpCompletePage');
  }

  afterCodeVerification() {
    // this.httpprovider.logout();
    this.navCtrl.setRoot(SignUpCompletePage);
  }

  afterSignUpComplete() {
    // this.httpprovider.logout();
    this.navCtrl.setRoot(LoginPage);
  }

}
