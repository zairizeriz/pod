import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoalactivityPage } from '../goalactivity/goalactivity';
import { EditGoalPage } from '../edit-goal/edit-goal';
// import { AddGoalPage } from '../add-goal/add-goal';
import { ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import {ShapeOptions,LineProgressComponent,CircleProgressComponent,SemiCircleProgressComponent} from 'angular2-progressbar';
// import { GoalDueDatePage } from '../goal-due-date/goal-due-date';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  goal = {
    goal_name:""
  }

  @ViewChild(CircleProgressComponent) circleComp: CircleProgressComponent;

  private circleOptions: ShapeOptions = {
    color: '#4ACCC6',
    trailColor: '#eee',
    trailWidth: 4,
    duration: 3000,
    easing: 'easeInOut',
    strokeWidth: 6,
    from: { color: '#4ACCC6', a: 0 },
    to: { color: '#4ACCC6', a: 1 },
    // Set default step function for all animate calls
    step: function(state: any, circle: any) {
      circle.path.setAttribute('stroke', state.color);
    }
  };

  homeGoal:any;
  goalsHome = {
    goal_name : "",
    amount :"",
    date :"",
    goal_image:"",
    current_amount:0


  }

  constructor(public navCtrl: NavController, 
    public modalCtrl: ModalController, public loadingCtrl: LoadingController, 
    public httpprovider:HttpProvider,public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.goal.goal_name=this.navParams.get('goal_name')

    let loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Loading Please Wait...'
  });

  loading.present();
   this.httpprovider.getGoalHome().then(
     (response) => {
       console.log(response)
       
       this.homeGoal = response
       this.goalsHome.goal_name = this.homeGoal.goal_name;
       this.goalsHome.amount = this.homeGoal.amount;
       this.goalsHome.date = this.homeGoal.date;
       this.goalsHome.goal_image = this.homeGoal.goal_image;
       if (this.homeGoal.current_amount){
         this.goalsHome.current_amount = this.homeGoal.current_amount
       }
       let currentvalue = this.homeGoal.current_amount/this.homeGoal.amount
      this.circleComp.animate(currentvalue);
    
      loading.dismiss();
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

 editGoal() {
   let profileModal = this.modalCtrl.create(EditGoalPage);
   profileModal.onDidDismiss(() => {
      this.ionViewDidLoad();
    });
   profileModal.present();
 }
//   addGoal(){
//   this.navCtrl.push(AddGoalPage);
// }

// goPage(){
//   this.navCtrl.push(GoalDueDatePage);
// }
}
