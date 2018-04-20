import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular'

/**
 * Generated class for the NotificationsSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications-setting',
  templateUrl: 'notifications-setting.html',
})
export class NotificationsSettingPage {
  toggleValue:any;
  toggleGMValue: boolean = false;
  // toggleSAValue: boolean = false;
  // toggleDSValue: boolean = false;
  // toggleERValue: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsSettingPage');
  }
  dismiss() {
   this.viewCtrl.dismiss();
   this.toggleValue= this.toggleGMValue;
   window.localStorage.setItem('toggleGMValue', this.toggleValue);

 }
}
