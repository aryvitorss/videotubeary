import { Component, OnInit, Input, Output } from "@angular/core";
import { VIDEOS } from '../videos-mock';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video } from '../video';
import { Contato } from "../contato/contato";
import { Sobre } from "../sobre/sobre";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-video-player',
  imports: [Contato, Sobre, NgOptimizedImage],
  templateUrl: './video-player.html',
  styleUrl: './video-player.css'
})
export class VideoPlayer implements OnInit {

  title = "videoPlayer";
  id = "videoPlayer";
  caminho = "../../assets/fotofundo.jpg"

  private readonly allowedHosts = [
    'www.youtube.com',
    'youtube.com',
    'www.youtube-nocookie.com',
    'youtube-nocookie.com'
  ];

  videos = VIDEOS;
  activeVideos = this.videos[0];
  url: string = this.activeVideos.youtubeURL;
  urlSafe!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.urlSafe = this.getSafeVideoUrl(this.url);
  }

  ngOnInit() {
    this.urlSafe = this.getSafeVideoUrl(this.url);
  }

  private getSafeVideoUrl(url: string): SafeResourceUrl {
    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname.toLowerCase();

      if (!this.allowedHosts.includes(hostname) || !parsedUrl.pathname.startsWith('/embed/')) {
        console.warn('URL de vídeo não permitida:', url);
        return this.sanitizer.bypassSecurityTrustResourceUrl('');
      }

      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } catch (error) {
      console.warn('URL de vídeo inválida:', url, error);
      return this.sanitizer.bypassSecurityTrustResourceUrl('');
    }
  }

  public chooseVideo(video:Video) {
    this.activeVideos = video;
    this.url = this.activeVideos.youtubeURL;
    this.urlSafe = this.getSafeVideoUrl(this.url);
  }

}
