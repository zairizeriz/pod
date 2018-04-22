import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
    user_image:"",
  }
	  constructor(public navCtrl: NavController, public navParams: NavParams,
      public viewCtrl:ViewController, public httpprovider:HttpProvider,
      public loadingCtrl: LoadingController, private toastCtrl: ToastController,
      private camera: Camera, private alertCtrl: AlertController) {
  }

  updateForm(){
  let toast = this.toastCtrl.create({
    message:'User successfully updated' ,
    duration: 3000,
    position: 'middle'
  });

  toast.present();

  console.log(this.user);
   toast.present();
  

     this.httpprovider.updateUserInfo(
     this.user.first_name,this.user.last_name,
     this.user.phone_number,this.user.user_image).then((result) => {
     // this.viewCtrl.dismiss();
     toast.dismiss();
     },
         (err) => {
         console.log(err);
     });
       this.navCtrl.pop();
 }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Loading Please Wait...'
  });

  loading.present();
    this.httpprovider.getUser().then(
     (response) => {
       console.log(response)
       
       this.userObj = response
       this.user.first_name = this.userObj.first_name;
       this.user.last_name = this.userObj.last_name;
       this.user.phone_number = this.userObj.phone_number;
       this.user.user_image = this.userObj.user_image;
       console.log(this.user)
       loading.dismiss();
     },
     err => {
       console.log(err);
     },
   );

}
presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Choose your photo from:',
    buttons: [
      {
        text: 'Camera',
        role: 'Camera',
        handler: () => {
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
 this.user.user_image = this.base64Image

}, (err) => {
 // Handle error
});
}
      },
      {
        text: 'Gallery',
        role: 'Gallery',
        handler: () => {
     const options: CameraOptions = {
  quality: 70,
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}
this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:

 
 this.base64Image = 'data:image/jpeg;base64,' + imageData;
 this.user.user_image = this.base64Image
 // this.user.user_image = imageData
 // console.log(this.user.user_image)
}, (err) => {
 // Handle error
});
}
      }
    ]
  });
  alert.present();
}

goBack(){
    this.navCtrl.pop();
  }
}

// private getBlob(b64Data:string, contentType:string, sliceSize:number= 512) {
//     contentType = contentType || '';
//     sliceSize = sliceSize || 512;

//     let byteCharacters = atob(b64Data);
//     let byteArrays = [];

//     for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
//         let slice = byteCharacters.slice(offset, offset + sliceSize);

//         let byteNumbers = new Array(slice.length);
//         for (let i = 0; i < slice.length; i++) {
//             byteNumbers[i] = slice.charCodeAt(i);
//         }

//         let byteArray = new Uint8Array(byteNumbers);

//         byteArrays.push(byteArray);
//     }

//     let blob = new Blob(byteArrays, {type: contentType});
//     return blob;

  

