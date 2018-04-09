import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	login = {};
	

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public httpprovider:HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
signInUser(){
console.log(this.login);

     this.httpprovider.loginUser(this.login).then((result) => {
       this.navCtrl.setRoot(TabsPage)
                
     },
         (err) => {
         console.log(err);
     });
 }
}
