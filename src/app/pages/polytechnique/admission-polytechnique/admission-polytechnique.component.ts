import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProgramService } from 'src/app/pages/polytechnique/services/program.service';
import { GlobalConstants } from '../../../common/global-constants';



@Component({
  selector: 'app-admission-polytechnique',
  templateUrl: './admission-polytechnique.component.html',
  styleUrls: ['./admission-polytechnique.component.scss']
})
export class AdmissionPolytechniqueComponent implements OnInit {

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
    private programService: ProgramService,
    private router: Router
  ) { }

  ngOnInit() {

    this.title.setTitle("IFP POLYTECHNIQUE - Admission En Ligne");

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

  clickConfirmationForm() {

    if (!$('input[name="cF"]').is(':checked')) {

      this.admissionForm.controls['cF'].setValue(true)

      $('input[name="cF"]').prop('checked', true);

    } else {

      this.admissionForm.controls['cF'].setValue(false)

      $('input[name="cF"]').prop('checked', false);

    }
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
      program: ['Electricité naval', Validators.required],
      concours: ['Concours du 12 Décembre 2022', Validators.required],
      fname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      ville: ['', Validators.required],
      sexe: ['F', Validators.required],
      age: ['', Validators.required],
      diplome: ['Baccalauréat ou Equivalent', Validators.required],
      center: ['Yaoundé - Mballa 2', Validators.required],
      cF: ['', Validators.required],
    });
  }

  submitAdmission() {
    $('.body-inner').hide();
    $('#loading').css('visibility', 'visible');


    let dateCreation = new Date()

    let responseForm = this.admissionForm.value

    responseForm['dateCreation'] = dateCreation

    this.http
      .post<any[]>(`${this.baseUrl}/polytechnique/add-admission`, responseForm)
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
