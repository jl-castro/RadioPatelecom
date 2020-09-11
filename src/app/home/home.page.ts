import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  StreamingMedia,
  StreamingVideoOptions,
} from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  msbapTitle = 'Prueba puerto 8004';
  msbapAudioUrl = environment.url;

  msbapDisplayTitle = false;
  msbapDisplayVolumeControls = true;

  darkMode: boolean;
  private streamingMedia: StreamingMedia;
  public audio = 'http://192.99.17.12:6358';
  constructor() {}

  cambio() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }

  play() {
    this.streamingMedia = new StreamingMedia();
    const options = {
      initFullscreen: false, // true is default. iOS only.
      keepAwake: true, // prevents device from sleeping. true is default. Android only.
      controls: false,
      successCallback() {
        console.log('Player closed without error.');
      },
      errorCallback(errMsg) {
        console.log('Error! ' + errMsg);
      },
    };
    this.streamingMedia.playAudio(environment.url, options);
  }
}
