import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private title: Title,
    private auth: AuthService) { }

  ngOnInit() {

    this.title.setTitle("IRDSM AVIATION - Login");

    //this.storeAdmission()
    this.loadScript('../assets/js/jquery.js');
    this.loadScript('../assets/js/plugins.js');
    this.loadScript('../assets/js/functions.js');

  }

  login(email: string, password: string) {
    $('#submitForm').show();

    $('#NSubmitForm').hide();

    this.auth.SignIn(email, password)
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
