import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './static/header/header.component';
import { PartnerComponent } from './static/partner/partner.component';
import { FooterComponent } from './static/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';
import { LanguageComponent } from './static/language/language.component';
import { MenuComponent } from './static/menu/menu.component';
import { ScrollTopComponent } from './static/scroll-top/scroll-top.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { LocaleService } from './services/locale.service';
import { FormationsComponent } from './pages/formations/formations.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PartnerComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FourOhFourComponent,
    LanguageComponent,
    MenuComponent,
    ScrollTopComponent,
    FormationsComponent,
    NewsletterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })


  ],
  providers: [
    LocaleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}