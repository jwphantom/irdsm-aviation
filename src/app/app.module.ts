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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LocaleService } from './services/locale.service';
import { FormationsComponent } from './pages/formations/formations.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { PiloteComponent } from './pages/pilote/pilote.component';
import { AdmissionComponent } from './pages/formations/admission/admission.component';
import { SubmissionComponent } from './pages/submission/submission.component';
import { PageTitleComponent } from './static/page-title/page-title.component';
import { SubmissionService } from './services/submission.service'
import { MaterialExampleModule } from 'material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';

//import guard
import { AuthGuard } from './shared/guard/auth.guard';


//import environment
import { environment } from '../environments/environment';


//angular fire import
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


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
    PiloteComponent,
    AdmissionComponent,
    SubmissionComponent,
    PageTitleComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    MatNativeDateModule,
    MaterialExampleModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,


  ],
  providers: [
    LocaleService,
    SubmissionService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}