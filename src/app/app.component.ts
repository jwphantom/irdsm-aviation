import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService } from './services/locale.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'afrizon';

  constructor(
    private translate: TranslateService,
    private localeservice: LocaleService,
    private router: Router) {

    translate.setDefaultLang(this.localeservice.lang);
  }

  ngOnInit() {
  }


  onActivate(event) {
    window.scroll(0, 0);

  }
}
