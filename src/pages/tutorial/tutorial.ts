import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {RegisterPage} from '../register/register';
import {RulesPage} from '../rules/rules';
import {SuccessPaymentPage} from '../success-payment/success-payment';
import {CardPaymentPage} from '../card-payment/card-payment';
import { LoadingController } from 'ionic-angular';
import { NotificationsSettingPage } from '../notifications-setting/notifications-setting';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 export interface Slide {
  title: string;
  description: string;
  image: string;
}


@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})


export class TutorialPage {

slides = [
          {
            title: "Welcome",
            description: "Save on something you really want and get rewarded",
            image: 'assets/imgs/logoSmallPodGreen1@3x.png',
          },
          {
            description:"Start saving on something that you really want",
            image: 'assets/imgs/onboardArt@3x.png',
          },
          {
            description:"pod automatically moves money to your pod savings account",
            image: 'assets/imgs/onboard2@3x.png',
          },
          {
            description:"Get rewarded once you have achieved your desired goal",
            image: 'assets/imgs/onboard3@3x.png',	
           }
        ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController) {
  	
   
        
       
  }

signIn(){
  this.navCtrl.push(LoginPage);
}

register(){
  this.navCtrl.push(RegisterPage);
}

rules(){
  this.navCtrl.push(RulesPage);
}

// succesPayment(){
//   this.navCtrl.push(SuccessPaymentPage);
// }

SavingTransfer(){
  this.navCtrl.push(CardPaymentPage);
}



}
