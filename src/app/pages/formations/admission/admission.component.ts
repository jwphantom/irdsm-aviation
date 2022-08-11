import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProgramsService } from 'src/app/services/programs.service';
import { GlobalConstants } from '../../common/global-constants';


@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {

  programs: any[] | undefined;
  dateComp: any[] | undefined;
  nEtude: any[] | undefined;
  admissionConfirmation: boolean = false

  admissionForm!: FormGroup;

  private baseUrl = GlobalConstants.apiURL;


  programsSubscription: Subscription | undefined;

  constructor(
    private title: Title,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private programService: ProgramsService,
    private router: Router
  ) { }

  ngOnInit() {

    this.title.setTitle("IRDSM AVIATION - Admission En Ligne");
    this.storePrograms();
    this.storeDateCompetition();
    this.storeNEtude();
    this.addAdmissionForm();

    this.loadScript('../assets/js/jquery.js');
    this.loadScript('../assets/js/plugins.js');
    this.loadScript('../assets/js/functions.js');
    this.loadScript('../assets/js/form.js');
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

  storePrograms() {
    this.programs = this.programService.programs;
  }

  storeDateCompetition() {
    this.dateComp = this.programService.dateComp;
  }

  storeNEtude() {
    this.nEtude = this.programService.nEtdute;
  }

  addAdmissionForm() {
    this.admissionForm = this.formBuilder.group({
      program: ['Licence de pilote de ligne', Validators.required],
      concours: ['Concours du 17 Septembre 2022', Validators.required],
      fname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      ville: ['', Validators.required],
      sexe: ['M', Validators.required],
      age: ['', Validators.required],
      diplome: ['Baccalauréat ou Equivalent', Validators.required],
      center: ['Yaoundé - Mballa 2', Validators.required],
      cF: ['', Validators.required],


    });
  }

  submitAdmission() {
    $('.body-inner').hide();
    $('#loading').css('visibility', 'visible');


    let dateCreation = new Date();

    let responseForm = this.admissionForm.value;

    responseForm['dateCreation'] = dateCreation

    this.http
      .post<any[]>(`${this.baseUrl}/add-admission`, responseForm)
      .subscribe(
        (response) => {

          $('#loading').css('visibility', 'hidden');
          $('.body-inner').show();
          $('.admission_success').show();
          this.admissionForm.reset();

          this.admissionConfirmation = !this.admissionConfirmation

          setTimeout(function () {

            $('.admission_success').hide();

          }, 5000);




        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );


  }
}
