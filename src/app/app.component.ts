import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService } from './services/locale.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

declare const gtag: Function; // <------------Important: the declartion for gtag is required!


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'afrizon';

  constructor(
    private translate: TranslateService,
    private activatedRoute: ActivatedRoute,
    private localeservice: LocaleService,
    private router: Router) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-TE5VY08SY7', { 'page_path': event.urlAfterRedirects });
      }
    })
    translate.setDefaultLang(this.localeservice.lang);
  }

  ngOnInit() {
  }


  onActivate(event) {
    window.scroll(0, 0);

  }
}
