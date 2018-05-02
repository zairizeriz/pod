import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateModule } from '@ngx-translate/core';
import { Camera } from '@ionic-native/camera';
import { ProgressBarModule } from 'angular2-progressbar';
import {LocalNotifications} from "@ionic-native/local-notifications";
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import {TutorialPage} from '../pages/tutorial/tutorial';
import { HttpProvider } from '../providers/http/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { AddexpensePage } from '../pages/addexpense/addexpense';
import { ContactPage } from '../pages/contact/contact';
import { GoalactivityPage } from '../pages/goalactivity/goalactivity';
import { HomePage } from '../pages/home/home';
import { NotificationsSettingPage } from '../pages/notifications-setting/notifications-setting';
import { ProfileSettingPage } from '../pages/profile-setting/profile-setting';
import { RewardsPage } from '../pages/rewards/rewards';
import { TabsPage } from '../pages/tabs/tabs';
import { VerificationPage } from '../pages/verification/verification';
import { VerificationCodePage } from '../pages/verification-code/verification-code';
import {SignUpCompletePage} from '../pages/sign-up-complete/sign-up-complete';
import {AddGoalPage} from '../pages/add-goal/add-goal';
import {FormsModule} from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GoalNamePage } from '../pages/goal-name/goal-name';
import { GoalTargetAmountPage } from '../pages/goal-target-amount/goal-target-amount';
import { GoalDueDatePage } from '../pages/goal-due-date/goal-due-date';
import { GoalCategoryPage } from '../pages/goal-category/goal-category';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { EditGoalPage } from '../pages/edit-goal/edit-goal';
import { RulesPage } from '../pages/rules/rules';
import {CardPaymentPage} from '../pages/card-payment/card-payment';
import {SuccessPaymentPage} from '../pages/success-payment/success-payment';
import { PromptForSavingPage } from '../pages/prompt-for-saving/prompt-for-saving';
import { ExpensesCategoryPage } from '../pages/expenses-category/expenses-category';
import { DatePipe } from '@angular/common'


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage, 
    TutorialPage,
    AboutPage,
    AccountPage,
    AddexpensePage,
    ContactPage,
    GoalactivityPage,
    HomePage,
    NotificationsSettingPage,
    ProfileSettingPage,
    RewardsPage,
    TabsPage,
    VerificationPage,
    SignUpCompletePage,
    AddGoalPage,
    VerificationCodePage,
    GoalNamePage,
    GoalTargetAmountPage,
    GoalDueDatePage,
    GoalCategoryPage,
    ForgotPasswordPage,
    EditGoalPage,
    RulesPage,
    CardPaymentPage,
    SuccessPaymentPage,
    PromptForSavingPage,
    ExpensesCategoryPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot(),
    HttpModule,
    HttpClientModule,
    FormsModule,
    BrowserModule, 
    ProgressBarModule

  

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    TutorialPage,
    AboutPage,
    AccountPage,
    AddexpensePage,
    ContactPage,
    GoalactivityPage,
    HomePage,
    NotificationsSettingPage,
    ProfileSettingPage,
    RewardsPage,
    TabsPage,
    VerificationPage,
    SignUpCompletePage,
    AddGoalPage,
    VerificationCodePage,
    GoalNamePage,
    GoalTargetAmountPage,
    GoalDueDatePage,
    GoalCategoryPage,
    ForgotPasswordPage,
    EditGoalPage,
    RulesPage,
    CardPaymentPage,
    SuccessPaymentPage,
    PromptForSavingPage,
    ExpensesCategoryPage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    InAppBrowser,
    LocalNotifications,
    DatePipe
  ]
})
export class AppModule {}
