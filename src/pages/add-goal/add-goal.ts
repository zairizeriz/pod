import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the AddGoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-goal',
  templateUrl: 'add-goal.html',
})
export class AddGoalPage {
	goall= {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpprovider:HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGoalPage');
  }
addGoalForm(){

  console.log(this.goall);

     this.httpprovider.createGoall(this.goall).then((result) => {
                
     },
         (err) => {
         console.log(err);
     });
 }

}
