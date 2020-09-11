import { Component, OnInit, ViewChild } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {


  public items: Array<{ title: string; note: string; icon: string }> = [];


  constructor(private videoPlayer: VideoPlayer,
              public sanitizer: DomSanitizer) {
  }
  playVideo() {
    this.videoPlayer.play('https://www.facebook.com/110977846933418/videos/974307999590165').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }


  ngOnInit() {
  }

}
