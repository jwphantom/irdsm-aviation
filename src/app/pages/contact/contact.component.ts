import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jquery from 'jquery';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private title: Title,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.loadScript('../assets/plugins/gmap3/gmap.min.js');
    this.loadScript('../assets/plugins/gmap3/map-styles.js');
    this.title.setTitle("IRDSM AVIATION - Contact");
    this.loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBByIEHoI3npofmaqJpkZUNqSUp_ermqmQ');

    this.loadScript('../assets/js/jquery.js');
    this.loadScript('../assets/js/plugins.js');
    this.loadScript('../assets/js/functions.js');

    this.loadScript('https://assets.calendly.com/assets/external/widget.js');

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

  onSubmit(form: NgForm) {

    let message = {
      name: form.value['name'],
      email: form.value['email'],
      subject: form.value['subject'],
      message: form.value['message']
    }

    this.httpClient
      .post('http://localhost:8080/send_email', message)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );


  }

}
