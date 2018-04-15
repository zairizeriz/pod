import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoalDueDatePage } from './goal-due-date';

@NgModule({
  declarations: [
    GoalDueDatePage,
  ],
  imports: [
    IonicPageModule.forChild(GoalDueDatePage),
  ],
})
export class GoalDueDatePageModule {}
