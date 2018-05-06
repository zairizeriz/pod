import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpCompletePage } from '../sign-up-complete/sign-up-complete';
import { HttpProvider } from '../../providers/http/http';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the VerificationCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verification-code',
  templateUrl: 'verification-code.html',
})
export class VerificationCodePage {
  
  currentUser
  resendCode
  code1:string;
  code2:string;
  code3:string;
  code4:string;
  code5:string;
  code6:string;
  user:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,public httpprovider:HttpProvider,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
   this.currentUser=this.navParams.get('user')
    console.log(this.currentUser)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificationCodePage');
     this.resendCode=this.navParams.get('resend')
    
  }

  // afterCodeVerification() {
  //   // this.httpprovider.logout();
  //   this.navCtrl.push(SignUpCompletePage);
  // }

  verify(){
    if (!this.code1 || !this.code2 || !this.code3 
       || !this.code4  || !this.code5 || !this.code6) {
      console.log('lalu')
           let toast = this.toastCtrl.create({
             message: 'Please fill in all required fields',
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

    let data = {
      user_id : this.currentUser.id,
      code: this.code1+this.code2+this.code3+this.code4+this.code5+this.code6
    }
    console.log(data)
    this.httpprovider.getCodeVerify(data).then(
     (response) => {
       console.log(response);
       
        this.navCtrl.push(SignUpCompletePage, this.user);
                  
     },
         (err) => {
           let toast = this.toastCtrl.create({
          message: err._body,
           duration: 3000,
          position: 'bottom'

  });
         toast.present();

         console.log('lalu');
         console.log(err);
     });
       // console.log(response)
       // this.user=response
       
       // console.log(this.user)
       // console.log(this.phone_number)
       // console.log(this.email)
       loading.dismiss();
 

}
}
sendAgain(){

this.httpprovider.getCode(this.resendCode).then(
     (response) => {
       let toast = this.toastCtrl.create({
             message: 'Code has been resend',
             duration:3000,
             position: 'bottom'
           });
           toast.present();
       console.log(response)
       let user=response
       // this.navCtrl.push(VerificationCodePage);
       // console.log(this.user)
       // console.log(this.phone_number)
       // console.log(this.email)
       
     },
     err => {
       console.log(err);
     },
   );
  }

}
