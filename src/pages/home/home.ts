import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoalactivityPage } from '../goalactivity/goalactivity';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openGoalActivity(){

  	this.navCtrl.push(GoalactivityPage);

  }

}
