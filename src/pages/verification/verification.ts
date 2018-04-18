import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerificationCodePage } from '../verification-code/verification-code';
import { HttpProvider } from '../../providers/http/http';
import { LoadingController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the VerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html',

})
export class VerificationPage {
  code = {
    email:"",
    phone_number:""
  }
  user:any;
  email

  // todo : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public httpprovider:HttpProvider, public formBuilder:FormBuilder, 
    public loadingCtrl: LoadingController) {


    // this.todo = this.formBuilder.group({
      
      
    //   email: new FormControl('', Validators.compose([Validators.maxLength(70),Validators.required,
    //   Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{3,})$')])),
     
    // });
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad VerificationPage');
        this.code.email=this.navParams.get('email')

  }

  // afterPhoneVerification() {
  //   // this.httpprovider.logout();
  //   this.navCtrl.push(VerificationCodePage);
  // }

  getphone(user){
let loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Loading Please Wait...'
  });

  loading.present();

    this.httpprovider.getCode(this.code).then(
     (response) => {
       console.log(response)
       let user=response
       this.navCtrl.push(VerificationCodePage, {user:user});
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
