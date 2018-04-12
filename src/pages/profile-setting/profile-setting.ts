import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera:Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileSettingPage');
  }
	 takePicture(){
	 	this.hideMe = true;
		// const options: CameraOptions = {
		//   quality: 100,
		//   destinationType: this.camera.DestinationType.DATA_URL,
		//   encodingType: this.camera.EncodingType.JPEG,
		//   mediaType: this.camera.MediaType.PICTURE
		// }

		// this.camera.getPicture(options).then((imageData) => {
		//  // imageData is either a base64 encoded string or a file URI
		//  // If it's base64:
		//  let base64Image = 'data:image/jpeg;base64,' + imageData;
		// }, (err) => {
		//  // Handle error
		// });
	}

}
