import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http';
import { AccountPage } from '../../pages/account/account';

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
  
  // user:any;
  userObj : any;
	user = {
    first_name : "",
    last_name :"",
    phone_number: "",
  }
	  constructor(public navCtrl: NavController, public navParams: NavParams, public httpprovider:HttpProvider) {
  }

  ionViewDidLoad() {
    this.httpprovider.getUser( ).then(
     (response) => {
       console.log(response)
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

  console.log(this.user);

     this.httpprovider.updateUserInfo(this.user.first_name,this.user.last_name,
       this.user.phone_number).then((result) => {
          this.navCtrl.setRoot(AccountPage);
     },
         (err) => {
         console.log(err);
     });
 }
}
