import { Component, OnInit, ViewChild } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  //https://www.youtube.com/watch?v=ygRT7JeY8tk
  vimeoUrl = 'https://vimeo.com/197933516';
  youtubeUrl = 'https://www.youtube.com/watch?v=lSD7mqdr9jo'
  vimeoId = '197933516';
  youtubeId = 'lSD7mqdr9jo';
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private embedService: EmbedVideoService) {
    console.log(this.embedService.embed(this.vimeoUrl));
    console.log(this.embedService.embed(this.youtubeUrl));

    console.log(this.embedService.embed_vimeo(this.vimeoId));
    console.log(this.embedService.embed_youtube(this.youtubeId));

    /*for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

}
