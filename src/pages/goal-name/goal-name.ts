import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { GoalTargetAmountPage } from '../goal-target-amount/goal-target-amount';

/**
 * Generated class for the GoalNamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goal-name',
  templateUrl: 'goal-name.html',
})
export class GoalNamePage {
	goal_name:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public httpprovider:HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalNamePage');
   
  }

  targetGoalName(value){

    window.localStorage.setItem('goal_name', this.goal_name);
    this.navCtrl.push(GoalTargetAmountPage)

     // this.navCtrl.push(GoalTargetAmountPage,{goal_name:this.goal_name})   
     // console.log(this.goal_name)        
    

}
}
