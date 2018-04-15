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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsSettingPage');
  }
  dismiss() {
   this.viewCtrl.dismiss();
 }
}
