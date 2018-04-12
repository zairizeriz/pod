import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	login = {};

  constructor(private alertCtrl:AlertController, public navCtrl: NavController, public navParams: NavParams, 
  	public httpprovider:HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
signInUser(){
console.log(this.login);

     this.httpprovider.loginUser(this.login).then((result) => {
       this.navCtrl.setRoot(TabsPage)
                
     },
         (err) => {
         console.log(err);
     });
 }
 
 showForgotPassword(){
let prompt = this.alertCtrl.create({
  title: 'Enter Your Email',
  message: "A new password will be sent to your email",
  inputs: [
  {
    name:'email',
    placeholder:'email'
  },],
  buttons:[{
    text:'Cancel',
    handler:data =>{
      console.log('cancel clicked')
    }
  },{
    text:'Submit',
    handler: data=>{
      //call user
    }
  }
  ]
});
prompt.present();

 }
}
