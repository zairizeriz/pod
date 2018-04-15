import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoalactivityPage } from '../goalactivity/goalactivity';
import { AddGoalPage } from '../add-goal/add-goal';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
    public modalCtrl: ModalController) {

  }

   presentProfileModal() {
   let profileModal = this.modalCtrl.create(GoalactivityPage);
   profileModal.present();
 }
  addGoal(){
  this.navCtrl.push(AddGoalPage);
}

}
