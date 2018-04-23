import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessPaymentPage } from './success-payment';

@NgModule({
  declarations: [
    SuccessPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(SuccessPaymentPage),
  ],
})
export class SuccessPaymentPageModule {}
