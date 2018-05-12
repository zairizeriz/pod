import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpProvider } from "../../providers/http/http";
import { ViewController } from "ionic-angular";
import { LoadingController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-goalactivity",
  templateUrl: "goalactivity.html"
})
export class GoalactivityPage {
  goals:any;
  goalActivities = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public httpprovider: HttpProvider,
    public loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      spinner: "ios",
      content: "Loading Please Wait..."
    });

    loading.present();
    this.httpprovider.getGoal().then(
      response => {
        console.log(response);
        this.goals = response;
        this.goalActivities = this.goals.data
        console.log(this.goalActivities)

        loading.dismiss();
      },
      err => {
        loading.dismiss();
        console.log(err);
      }
    );
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
