import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { LoadingController } from 'ionic-angular';



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
	getPass = {
    email:""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public httpprovider:HttpProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
    this.getPass.email=this.navParams.get('email')
  }

   getPassword(user){
let loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Loading Please Wait...'
  });

  loading.present();

    this.httpprovider.getCode(this.getPass).then(
     (response) => {
       console.log(response)
       let user=response
       // this.navCtrl.push(VerificationCodePage, {user:user});
       // console.log(this.user)
       // console.log(this.phone_number)
       // console.log(this.email)
       loading.dismiss();
     },
     err => {
       console.log(err);
     },
   );
  }

}
