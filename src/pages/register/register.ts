import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  register = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder, 
    public httpprovider:HttpProvider) {
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
}
