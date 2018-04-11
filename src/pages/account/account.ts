import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileSettingPage } from '../profile-setting/profile-setting';
import { NotificationsSettingPage } from '../notifications-setting/notifications-setting';
import { HttpProvider } from '../../providers/http/http';
import {TutorialPage} from '../tutorial/tutorial';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpprovider:HttpProvider) {
  }

  ionViewDidLoad() {
     this.httpprovider.getUser().then(
     (response) => {
       console.log(response)
       this.user=response
       console.log(this.user)
     },
     err => {
       console.log(err);
     },
   );
  }

  profileSetting(){

  	this.navCtrl.push(ProfileSettingPage);

  }

  notificationSetting(){
    this.navCtrl.push(NotificationsSettingPage);
  }
logout() {
    localStorage.removeItem("token");
    this.navCtrl.setRoot(TutorialPage);
  }
}
