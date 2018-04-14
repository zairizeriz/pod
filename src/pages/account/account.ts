import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileSettingPage } from '../profile-setting/profile-setting';
import { NotificationsSettingPage } from '../notifications-setting/notifications-setting';
import { HttpProvider } from '../../providers/http/http';
import {TutorialPage} from '../tutorial/tutorial';
import { ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public httpprovider:HttpProvider,public modalCtrl: ModalController, 
    public loadingCtrl: LoadingController) {
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
       loading.dismiss();
       this.user=response
       console.log(this.user)
     },
     err => {
       console.log(err);
     },
   );
  }

logout() {
    localStorage.removeItem("token");
    // this.navCtrl.setRoot(TutorialPage);
    let homeModal = this.modalCtrl.create(TutorialPage);
   homeModal.present();


  }
  presentProfileModal() {
   let profileModal = this.modalCtrl.create(ProfileSettingPage);
   profileModal.onDidDismiss(() => {
      this.ionViewDidLoad();
    });
   profileModal.present();
 }

 presentNotification() {
   let profileModal = this.modalCtrl.create(NotificationsSettingPage);
   profileModal.present();
 }

 // present() {
 //   let profileModal = this.modalCtrl.create(ProfileSettingPage);
 //   profileModal.present();
 // }
}
