import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['../theme/main.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  backButtonSubscription;
  public appPages = [
    {
      title: 'Radio en Directo',
      url: '/home',
      icon: 'radio'
    },
    {
      title: 'TV en Vivo',
      url: '/list',
      icon: 'tv'
    },
    {
      title: 'Ultimas Noticias',
      url: '/noticias',
      icon: 'paper'
    },
    {
      title: 'Galeria',
      url: '/galeria',
      icon: 'photos'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private androidPermissions: AndroidPermissions,
    public alertCtrl: AlertController
  ) {
    this.initializeApp();
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.INTERNET).then(
      result => console.log('Has permission?', result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.INTERNET)
    );
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Salir',
      message: '¿Esta Seguro que quiere salir?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SI',
          handler: () => {
              navigator['app'].exitApp();
          }
        }
      ]
    });

    await alert.present();
  }


  ngOnInit() { }
  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      this.presentAlertConfirm();
    });
  }
  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


}
