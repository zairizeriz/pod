import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromptForSavingPage } from './prompt-for-saving';

@NgModule({
  declarations: [
    PromptForSavingPage,
  ],
  imports: [
    IonicPageModule.forChild(PromptForSavingPage),
  ],
})
export class PromptForSavingPageModule {}
