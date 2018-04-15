import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoalNamePage } from './goal-name';

@NgModule({
  declarations: [
    GoalNamePage,
  ],
  imports: [
    IonicPageModule.forChild(GoalNamePage),
  ],
})
export class GoalNamePageModule {}
