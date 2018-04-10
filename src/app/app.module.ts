import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateModule } from '@ngx-translate/core';
import { Camera } from '@ionic-native/camera';

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
    VerificationPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot(),
    HttpModule,
    HttpClientModule,
  

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
    
  ],
  providers: [
  Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider
  ]
})
export class AppModule {}
