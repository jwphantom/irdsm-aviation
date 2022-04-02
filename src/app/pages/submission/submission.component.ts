import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Submission } from 'src/app/models/submission';
import { SubmissionService } from 'src/app/services/submission.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProgramsService } from 'src/app/services/programs.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {

  sub: Submission[] = [];
  submissionSubscription: Subscription;

  selectConcours: string = "all";

  listConcours: any[];

  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['no', 'fname', 'phone', 'email', 'age', 'diplome'];

  dataSource = new MatTableDataSource<Submission>([]);


  constructor(
    private title: Title,
    private submission: SubmissionService,
    private programs: ProgramsService
  ) { }

  ngOnInit() {

    this.title.setTitle("IRDSM AVIATION - Réponses au formulaire");

    this.storeAdmission()
    this.listConcours = this.programs.listConcours;
    this.loadScript('../assets/js/jquery.js');
    this.loadScript('../assets/js/plugins.js');
    this.loadScript('../assets/js/functions.js');
    this.loadScript('../assets/js/form.js');
    this.loadScript('https://code.iconify.design/1/1.0.7/iconify.min.js');

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
  }



  storeAdmission() {

    this.submission.getList(this.selectConcours);


    this.submissionSubscription = this.submission.submissionSubject.subscribe(
      (submission: Submission[]) => {
        //this.sub = submission;
        this.dataSource = new MatTableDataSource<Submission>(submission);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)

      }
    );
    this.submission.emitsubmission();
  }

  changeDateconcours(date: string) {

    this.submission.getList(date);

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
