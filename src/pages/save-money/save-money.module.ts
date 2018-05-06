import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaveMoneyPage } from './save-money';

@NgModule({
  declarations: [
    SaveMoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(SaveMoneyPage),
  ],
})
export class SaveMoneyPageModule {}
