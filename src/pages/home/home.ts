import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoalactivityPage } from '../goalactivity/goalactivity';
// import { AddGoalPage } from '../add-goal/add-goal';
import { ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
// import { GoalDueDatePage } from '../goal-due-date/goal-due-date';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  homeGoal:any;
  goalsHome = {
    goal_name : "",
    amount :"",
    date :"",
    goal_image:""


  }

  constructor(public navCtrl: NavController, 
    public modalCtrl: ModalController, public loadingCtrl: LoadingController, 
    public httpprovider:HttpProvider) {

  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Loading Please Wait...'
  });

  loading.present();
   this.httpprovider.getGoalHome().then(
     (response) => {
       console.log(response)
       loading.dismiss();
       this.homeGoal = response
       this.goalsHome.goal_name = this.homeGoal.goal_name;
       this.goalsHome.amount = this.homeGoal.amount;
       this.goalsHome.date = this.homeGoal.date;
       this.goalsHome.goal_image = this.homeGoal.goal_image;
       console.log(this.goalsHome)
        {
         
    }
       console.log(this.goalsHome)

       

     },
     err => {
       console.log(err);
     },
   );
}

   presentProfileModal() {
   let profileModal = this.modalCtrl.create(GoalactivityPage);
   profileModal.present();
 }
//   addGoal(){
//   this.navCtrl.push(AddGoalPage);
// }

// goPage(){
//   this.navCtrl.push(GoalDueDatePage);
// }
}
