import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { HttpProvider } from '../../providers/http/http';
import {VerificationPage} from '../verification/verification';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  register = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public formBuilder:FormBuilder, public httpprovider:HttpProvider, 
    private iab: InAppBrowser, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
registerForm(){

  console.log(this.register);

     this.httpprovider.registerUser(this.register).then((result) => {
                
     },
         (err) => {
         console.log(err);
     });
 }
 afterRegister() {
    // this.httpprovider.logout();
    this.navCtrl.setRoot(VerificationPage);
  }
  inAppButtonClick(){
    let loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Loading Please Wait...'
  });

  loading.present();
  const browser = this.iab.create('http://usepod.com/privacy-policy'); 
  loading.dismiss();
}
}
