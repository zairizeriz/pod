import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileSettingPage } from '../profile-setting/profile-setting';
import { NotificationsSettingPage } from '../notifications-setting/notifications-setting';
import { HttpProvider } from '../../providers/http/http';
import {TutorialPage} from '../tutorial/tutorial';
import { ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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
  image:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public httpprovider:HttpProvider,public modalCtrl: ModalController, 
    public loadingCtrl: LoadingController, private alertCtrl: AlertController,
    private iab: InAppBrowser) {
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
       
       this.user=response
       this.image=this.user.user_image
       console.log(this.user)
       loading.dismiss();
     },
     err => {
       console.log(err);
     },
   );
  }

logout() {
  let alert = this.alertCtrl.create({
    title: 'Confirm logout',
    message: 'Are you sure to leave?',
    buttons: [
      {
        text: 'No',
        role: 'No',
        handler: () => {
          this.navCtrl.setRoot(AccountPage);
          console.log('No clicked');
        }
      },
      {
        text: 'Yes',
        role: 'Yes',
        handler: () => {
          localStorage.removeItem("token");
    let homeModal = this.modalCtrl.create(TutorialPage);
   homeModal.present();
          console.log('Yes clicked');
        }
      }
    ]
  });
  alert.present();


    


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
