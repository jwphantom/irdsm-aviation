import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProgramsService } from 'src/app/services/programs.service';
import { GlobalConstants } from '../../../common/global-constants';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { Competition } from 'src/app/models/competition';


@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {

  isLoadingForm: boolean = true;

  competitions: Competition;
  competitionSuscription: Subscription | undefined

  selectedCompetition: any = undefined

  listConcours: any[] | undefined

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
    private router: Router,
    public competitionService: CompetitionService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.title.setTitle("IRDSM AVIATION - Admission En Ligne");

    this.storePrograms();

    this.storeDateCompetition();

    this.storeNEtude();

    //this.storeCompetition()

    this.addAdmissionForm();
    console.log(this.isLoadingForm)


    this.loadScript('../assets/js/jquery.js');

    this.loadScript('../assets/js/plugins.js');

    this.loadScript('../assets/js/functions.js');

    this.loadScript('../assets/js/form.js');

    this.loadScript('https://code.iconify.design/1/1.0.7/iconify.min.js');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLoadingForm = false;
      console.log(this.isLoadingForm)
    }, 2000);
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
    this.selectedCompetition = this.dateComp[0].name
  }

  storeNEtude() {
    this.nEtude = this.programService.nEtdute;
  }

  addAdmissionForm() {
    this.admissionForm = this.formBuilder.group({
      program: ['Hôtesse de l’air / stewards', Validators.required],
      concours: ["Concours du 05 Août 2023", Validators.required],
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

    //console.log(responseForm)

    this.http
      .post<any[]>(`${this.baseUrl}/submission/add-admission`, responseForm)
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

  storeCompetition() {
    this.competitionService.getList()
    this.competitionSuscription = this.competitionService.competitionSubject.subscribe(
      (competition: Competition[]) => {
        this.competitions = competition[competition.length - 1]
        this.selectedCompetition = this.competitions.name
        this.cdr.detectChanges();
      }
    );
  }

}
