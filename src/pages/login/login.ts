import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { TabsPage } from '../tabs/tabs';
import { AddGoalPage } from '../add-goal/add-goal';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
// import { HomePage } from '../home/home';
import { LoadingController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';



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
  rootPage:any;
  goal:any;
  

  constructor(private alertCtrl:AlertController, public navCtrl: NavController,
   public navParams: NavParams, public httpprovider:HttpProvider, 
   public toastCntrl:ToastController, public loadingCtrl: LoadingController, 
   private iab: InAppBrowser) {


 
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
           position: 'bottom'
         });
         toast.present();

       }else{
         this.httpprovider.getGoalHome( ).then(
         (response) => {
           
           this.goal = response
           console.log(this.goal)
           if (this.goal == 'No Goal') {
              this.navCtrl.setRoot(AddGoalPage);

            } else {
              this.navCtrl.setRoot(TabsPage);
              
            }
         },
         err => {
           console.log(err);
         },
       );

         
         // this.navCtrl.setRoot(TabsPage)
       }
                
     },
         (err) => {
         console.log(err);
     });

 }
 
 showForgotPassword(){
this.navCtrl.setRoot(ForgotPasswordPage);

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
