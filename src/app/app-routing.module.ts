import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdmissionComponent } from './pages/formations/admission/admission.component';
import { FormationsComponent } from './pages/formations/formations.component';
import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { PiloteComponent } from './pages/pilote/pilote.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsletterComponent },
  { path: 'program-pilote', component: PiloteComponent },
  { path: 'formation', component: FormationsComponent  },
  { path: 'admission', component: AdmissionComponent  },
  { path: 'about', component: AboutComponent  },
  { path: 'service', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path : '', component: HomeComponent},
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
