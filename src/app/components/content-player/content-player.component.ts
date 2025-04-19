import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-content-player',
  imports: [],
  templateUrl: './content-player.component.html',
  styleUrl: './content-player.component.scss'
})
export class ContentPlayerComponent implements OnChanges {
  @Input() videoUrl: string = 'https://www.youtube.com/shorts/ZIdIA7WCxMA';
  embedUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer){
    const videoId = this.extractYoutubeVideoId(this.videoUrl);
    if (videoId) {
      const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      console.error('Unsupported video URL. Please use a valid YouTube video or Shorts URL.');
    }
  }

  ngOnChanges(changes : SimpleChanges): void {
    if (changes['videoUrl'] && this.videoUrl) {
    }

  }


  private extractYoutubeVideoId(url : string): string {
    let videoId = '';
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|shorts\/|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      videoId = match[2];
    }
    return videoId;
  }

}
