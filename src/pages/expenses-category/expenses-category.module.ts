import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensesCategoryPage } from './expenses-category';

@NgModule({
  declarations: [
    ExpensesCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpensesCategoryPage),
  ],
})
export class ExpensesCategoryPageModule {}
