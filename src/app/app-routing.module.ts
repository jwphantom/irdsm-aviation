import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdmissionComponent } from './pages/formations/admission/admission.component';
import { FormationsComponent } from './pages/formations/formations.component';
import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { PiloteComponent } from './pages/pilote/pilote.component';
import { ServicesComponent } from './pages/services/services.component';
import { SubmissionComponent } from './pages/submission/submission.component';
import { AuthGuard } from "./shared/guard/auth.guard";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsletterComponent },
  { path: 'program-pilote', component: PiloteComponent },
  { path: 'formation', component: FormationsComponent },
  { path: 'admission', component: AdmissionComponent },
  { path: 'submission', component: SubmissionComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
