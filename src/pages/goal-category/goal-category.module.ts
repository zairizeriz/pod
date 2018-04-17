import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoalCategoryPage } from './goal-category';

@NgModule({
  declarations: [
    GoalCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(GoalCategoryPage),
  ],
})
export class GoalCategoryPageModule {}
