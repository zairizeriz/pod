import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoalCategoryPage } from '../goal-category/goal-category';

/**
 * Generated class for the GoalDueDatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goal-due-date',
  templateUrl: 'goal-due-date.html',
})
export class GoalDueDatePage {
	goal_name:any;
	amount:any;
	due_date:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.goal_name=this.navParams.get('goal_name');
  	this.amount=this.navParams.get('amount')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalDueDatePage');
  }

  targetGoalDueDate(value){

    window.localStorage.setItem('due_date', this.due_date);
    console.log(window.localStorage);
  this.navCtrl.pop()

     // this.navCtrl.push(GoalCategoryPage,{goal_name:this.goal_name,
     //  amount:this.amount, due_date:this.due_date})   
     // console.log(this.goal_name)  
     // console.log(this.amount)   
     // console.log(this.due_date)    
    

}

}
