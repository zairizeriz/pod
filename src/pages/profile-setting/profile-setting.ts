import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular'
import { HttpProvider } from '../../providers/http/http';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import { AccountPage } from '../../pages/account/account';

/**
 * Generated class for the ProfileSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-setting',
  templateUrl: 'profile-setting.html',
})
export class ProfileSettingPage {

  hideMe = false;
  base64Image:any;
  
  // user:any;
  userObj : any;
	user = {
    first_name : "",
    last_name :"",
    phone_number: "",
  }
	  constructor(public navCtrl: NavController, public navParams: NavParams,
      public viewCtrl:ViewController, public httpprovider:HttpProvider,
      public loadingCtrl: LoadingController, private toastCtrl: ToastController,
      private camera: Camera) {
  }



  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Loading Please Wait...'
  });

  loading.present();
    this.httpprovider.getUser( ).then(
     (response) => {
       console.log(response)
       loading.dismiss();
       this.userObj = response
       this.user.first_name = this.userObj.first_name;
       this.user.last_name = this.userObj.last_name;
       this.user.phone_number = this.userObj.phone_number;
       console.log(this.user)
     },
     err => {
       console.log(err);
     },
   );

}
updateForm(){
  let toast = this.toastCtrl.create({
    message: 'Profile was updated successfully',
    duration: 10000,
    position: 'middle'
  });

  toast.present();

  console.log(this.user);
  toast.dismiss();

     this.httpprovider.updateUserInfo(this.user.first_name,this.user.last_name,
       this.user.phone_number).then((result) => {
          this.viewCtrl.dismiss();
     },
         (err) => {
         console.log(err);
     });
 }
 openCamera(){
     const options: CameraOptions = {
  quality: 70,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}
this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 this.base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
});
}

}

