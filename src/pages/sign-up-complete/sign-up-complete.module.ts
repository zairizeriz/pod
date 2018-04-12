import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpCompletePage } from './sign-up-complete';

@NgModule({
  declarations: [
    SignUpCompletePage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpCompletePage),
  ],
})
export class SignUpCompletePageModule {}
