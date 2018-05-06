import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import {VerificationPage} from '../verification/verification';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

todo : FormGroup;
validation_messages:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public formBuilder:FormBuilder, public httpprovider:HttpProvider, 
    private iab: InAppBrowser, public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController) {

     this.todo = this.formBuilder.group({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password: new FormControl('', Validators.compose([Validators.minLength(8), 
      Validators.required, 
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])),
    });

     this.validation_messages={
   'first_name': [{ type: 'required', message: 'Name is required.' }],
    'last_name' :[{type: 'required', message: 'Last name is required.'}],
    'email' :[{type: 'required', message: 'Email is required.'},{type: 'pattern', message: 'Please enter a valid email.'}],
    'password' :[{type: 'required', message: 'Password is required.'},{type: 'minlength', message: ''},{type: 'pattern', message: '8 characters, 1 uppercase, 1 lowercase, 1 number'}]
  };

  }

  



  // logForm(){
  //   console.log(this.todo.value)
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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

  registerForm(){
    let loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Loading Please Wait...'
  });

  loading.present()

      

  console.log(this.todo.value);

     this.httpprovider.registerUser(this.todo.value).then((result) => {
       ;

       let response = result;
       loading.dismiss();

       console.log(response);
       if(response == 'Email already exists')
       { console.log('lalu')
         let toast = this.toastCtrl.create({
          message: 'Email already exists',
           duration: 3000,
          position: 'bottom'

  });
                   toast.present();

       }
       else{
         this.navCtrl.push(VerificationPage,{email:this.todo.value.email});
       }
                  
     },
         (err) => {
         console.log('lalu');
         console.log(err);
     });

 } 
}

