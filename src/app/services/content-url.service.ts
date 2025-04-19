import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentUrlService {

  constructor() {
  }
  private  videoUrlSubject: BehaviorSubject<string> = new BehaviorSubject<string>("https://www.youtube.com/shorts/ZIdIA7WCxMA"); 
  public videoUrl$: Observable<string> = this.videoUrlSubject.asObservable();

  setVideoUrl(url : string) : void {
    this.videoUrlSubject.next(url);
  }
}
