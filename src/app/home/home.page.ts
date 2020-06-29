import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  msbapTitle = 'Prueba puerto 8008';
  msbapAudioUrl = 'http://173.212.204.188:8008/stream';

  msbapDisplayTitle = true;
  msbapDisplayVolumeControls = true;
}
