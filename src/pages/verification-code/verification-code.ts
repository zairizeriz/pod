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
  code:any;
  user:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,public httpprovider:HttpProvider,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
   this.currentUser=this.navParams.get('user')
    console.log(this.currentUser)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificationCodePage');
    
  }

  // afterCodeVerification() {
  //   // this.httpprovider.logout();
  //   this.navCtrl.push(SignUpCompletePage);
  // }

  verify(){
    let loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Loading Please Wait...'
  });

  loading.present();

    let data = {
      user_id : this.currentUser.id,
      code: this.code
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
