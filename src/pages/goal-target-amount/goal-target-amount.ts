import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoalDueDatePage } from '../goal-due-date/goal-due-date';

/**
 * Generated class for the GoalTargetAmountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goal-target-amount',
  templateUrl: 'goal-target-amount.html',
})
export class GoalTargetAmountPage {
	goal_name:any;
	amount:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.goal_name=this.navParams.get('goal_name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalTargetAmountPage');

}
targetGoalAmount(value){

   window.localStorage.setItem('amount', this.amount);
    console.log(window.localStorage);

     // this.navCtrl.push(GoalDueDatePage,{goal_name:this.goal_name, amount:this.amount})   
     // console.log(this.goal_name)  
     // console.log(this.amount)      
    

}
}
