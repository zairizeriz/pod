import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddGoalPage } from '../add-goal/add-goal';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the GoalCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goal-category',
  templateUrl: 'goal-category.html',
})
export class GoalCategoryPage {
	goal_name:any;
	amount:any;
	due_date:any;
  category_id:any;
  categories:any;
expense= {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public httpprovider: HttpProvider) {
  	this.goal_name=this.navParams.get('goal_name');
  	this.amount=this.navParams.get('amount')
  	this.due_date=this.navParams.get('due_date')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalCategoryPage');
    this.httpprovider.getCategoryGoal().subscribe(
     response => {
       console.log(response)
       this.categories=response.data
     },
     err => {
       console.log(err);
     },
     ()=>{
     console.log('List of categories')
   }
   );
  }

targetGoalCategory(category_id){

   window.localStorage.setItem('category_id', category_id);
    console.log(window.localStorage);

     // this.navCtrl.push(AddGoalPage,{goal_name:this.goal_name,
     //  amount:this.amount, due_date:this.due_date, category_id:category_id})   
     // console.log(this.goal_name)  
     // console.log(this.amount)   
     // console.log(this.due_date)
     // console.log(category_id)    
    

}
}
