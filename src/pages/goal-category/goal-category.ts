import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddGoalPage } from '../add-goal/add-goal';
import { HttpProvider } from '../../providers/http/http';
import { LoadingController } from 'ionic-angular';


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
    public httpprovider: HttpProvider, public loadingCtrl: LoadingController) {
  	this.goal_name=this.navParams.get('goal_name');
  	this.amount=this.navParams.get('amount')
  	this.due_date=this.navParams.get('due_date')
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'Loading Please Wait...'
    });
    loading.present();
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
      loading.dismiss();
     console.log('List of categories')
   }
   );
  }

targetGoalCategory(category_id,cat_name){

   window.localStorage.setItem('category_id', category_id);
   window.localStorage.setItem('cat_name', cat_name);
    this.navCtrl.push(AddGoalPage)
}
}
