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
<<<<<<< HEAD
  summary : any
  milestones : any;
  savings : any;
  expenses : any;



  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsSettingPage');
       this.summary =  window.localStorage.getItem('summary')  ? window.localStorage.getItem('summary') : false  
       this.milestones = window.localStorage.getItem('milestones') ? window.localStorage.getItem('milestones') : false
       this.savings = window.localStorage.getItem('savings') ? window.localStorage.getItem('savings') : false
       this.expenses = window.localStorage.getItem('expenses') ? window.localStorage.getItem('expenses') : false
 
  }
  dismiss() {
    window.localStorage.setItem('summary', this.summary)
    window.localStorage.setItem('milestones', this.milestones)
    window.localStorage.setItem('savings', this.savings)
    window.localStorage.setItem('expenses', this.expenses)
   this.viewCtrl.dismiss();
 

 }
}
