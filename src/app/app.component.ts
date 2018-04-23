import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TabsPage } from '../pages/tabs/tabs';
import {  AddGoalPage } from '../pages/add-goal/add-goal';

// import { AddGoalPage } from '../pages/add-goal/add-goal';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // if (window.localStorage.getItem('token') ) {
      //   this.rootPage = TutorialPage;

      // } else {
      //   this.rootPage = AddGoalPage;


      // }

      if (window.localStorage.getItem('token') ) {
        if (window.localStorage.getItem('has_added')) {
              this.rootPage = TabsPage;

            } else {
              this.rootPage = AddGoalPage; 
            }

      } else {
        this.rootPage = TutorialPage;


      }
    });
  }
}

