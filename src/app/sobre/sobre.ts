import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css'
})
export class Sobre implements OnInit {
 title = "Sobre";
  id = "sobre";

  linksrotasredessocias = [
    {
      enderecoweb: "https://www.youtube.com/@arysouza-p8q",
      enderecoweb_icone: "../assets/youtube-brands-solid-full.svg",
      enderecoweb_title: "Youtube",
      animacao_link_css:"linksrotas_animacao"
    },
    {
      enderecoweb: "https://www.instagram.com/aryvitordosanjos/#",
      enderecoweb_icone: "../assets/instagram-brands-solid-full.svg",
      enderecoweb_title: "Instagram",
      animacao_link_css:"linksrotas_animacao"
    },
    {
      enderecoweb: "https://www.tiktok.com/@aryvitoranjos",
      enderecoweb_icone: "../assets/tiktok-brands-solid-full.svg",
      enderecoweb_title: "TikTok",
      animacao_link_css:"linksrotas_animacao"
    },
  ];

  constructor() {}
  ngOnInit() { }

}
