import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';



/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

		email="";
		err="";


  constructor(public navCtrl: NavController, public navParams: NavParams,
   public loadingCtrl: LoadingController, public httpprovider:HttpProvider, 
   public toastCntrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

resetPass(){
	if (this.email === "") {
      console.log('lalu')
           let toast = this.toastCntrl.create({
             message: 'Please fill required',
             duration:3000,
             position: 'bottom'
           });
           toast.present();
    }
    else{

let loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Loading Please Wait...'
  });

  loading.present();
  let email={
  	email:this.email
  }

    this.httpprovider.forgotPassword(email).then(
     (response) => {

            console.log(response)
            let toast = this.toastCntrl.create({
              message: 'Check your email to reset password.',
              duration: 1000,
              position: 'bottom'
            });

            toast.present();    
            this.navCtrl.push(LoginPage)
            loading.dismiss();
     },
     err => {
       console.log(err);
       let toast = this.toastCntrl.create({
              message: err._body,
              duration: 1000,
              position: 'bottom'
            });

            toast.present();

            loading.dismiss();

     },
   );
  }
}
}
