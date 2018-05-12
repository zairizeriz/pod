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
  min_date:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.goal_name=this.navParams.get('goal_name');
    this.amount=this.navParams.get('amount')
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalDueDatePage');
    this.due_date=new Date().toLocaleString()
    this.min_date = new Date().toISOString()
    console.log(this.min_date)
  }

  targetGoalDueDate(value){
    console.log(value)
    var real_due_date=new Date(this.due_date);
 //   var formattedDate = moment(date).format('YYYYMMDD');

    real_due_date.setDate(1)
    console.log(real_due_date.toLocaleString())


    window.localStorage.setItem('due_date', real_due_date.toLocaleString())
    console.log(window.localStorage);
  this.navCtrl.push(GoalCategoryPage)

     // this.navCtrl.push(GoalCategoryPage,{goal_name:this.goal_name,
     //  amount:this.amount, due_date:this.due_date})   
     // console.log(this.goal_name)  
     // console.log(this.amount)   
     // console.log(this.due_date)    
    

}

}
