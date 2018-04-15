import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { TabsPage } from '../tabs/tabs';
import { LoadingController } from 'ionic-angular';

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

  constructor(private alertCtrl:AlertController, public navCtrl: NavController,
   public navParams: NavParams, public httpprovider:HttpProvider, 
   public toastCntrl:ToastController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
signInUser(){
console.log(this.login);
let loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Loading Please Wait...'
  });

  loading.present();
     this.httpprovider.loginUser(this.login).then((result) => {
 loading.dismiss();
       if (result['response'] === 'error'){
       console.log('lalu')
         let toast = this.toastCntrl.create({
           message: 'Email and Password did not match. Please try again.',
           duration:3000,
           position: 'middle'
         });
         toast.present();


       }else{
         this.navCtrl.setRoot(TabsPage)
       }
                
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
