import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoalCompletePage } from './goal-complete';

@NgModule({
  declarations: [
    GoalCompletePage,
  ],
  imports: [
    IonicPageModule.forChild(GoalCompletePage),
  ],
})
export class GoalCompletePageModule {}
