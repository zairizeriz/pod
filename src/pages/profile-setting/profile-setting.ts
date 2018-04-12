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
  // user:any;
	user = {}
	  constructor(public navCtrl: NavController, public navParams: NavParams, public httpprovider:HttpProvider) {
  }

  ionViewDidLoad() {
    this.httpprovider.getUser( ).then(
     (response) => {
       console.log(response)
       this.user =response
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
