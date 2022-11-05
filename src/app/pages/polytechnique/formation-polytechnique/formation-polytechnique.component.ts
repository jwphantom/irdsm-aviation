import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-formation-polytechnique',
  templateUrl: './formation-polytechnique.component.html',
  styleUrls: ['./formation-polytechnique.component.scss']
})
export class FormationPolytechniqueComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit() {

    this.title.setTitle("IFP POLYTECHNIQUE - Formations");

    this.loadScript('../assets/js/jquery.js');
    this.loadScript('../assets/js/plugins.js');
    this.loadScript('../assets/js/functions.js');
    this.loadScript('https://code.iconify.design/1/1.0.7/iconify.min.js');
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
