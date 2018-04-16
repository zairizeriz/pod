import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import {VerificationPage} from '../verification/verification';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LoadingController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  register = {
    first_name:'',
    last_name:'',
    email:'',
    password:'',
  };
todo : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public formBuilder:FormBuilder, public httpprovider:HttpProvider, 
    private iab: InAppBrowser, public loadingCtrl: LoadingController) {

     this.todo = this.formBuilder.group({
      first_name: new FormControl('', Validators.compose([Validators.required])),
      last_name: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.maxLength(70),Validators.required,
      Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{3,})$')])),
      password: new FormControl('', Validators.compose([Validators.minLength(8), 
      Validators.required, 
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])),
    });
  }

  // logForm(){
  //   console.log(this.todo.value)
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerForm(){

  console.log(this.todo.value);

     this.httpprovider.registerUser(this.todo.value).then((result) => {
     this.navCtrl.push(VerificationPage);           
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
