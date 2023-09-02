import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService } from './services/locale.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

declare let fbq: Function; // fbq function declaration 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'irdsm-aviation';

  constructor(
    private translate: TranslateService,
    private localeservice: LocaleService,
    private router: Router) {

    translate.setDefaultLang(this.localeservice.lang);
    router.events.subscribe((y: any) => {

      if (y instanceof NavigationEnd) {

        fbq('track', 'PageView');
      }

    })

  }

  ngOnInit() {
  }


  onActivate(event: any) {
    window.scroll(0, 0);

  }
}
