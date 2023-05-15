import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../../common/global-constants';
import { Competition } from 'src/app/models/competition';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(protected http: HttpClient) { }

  competition: Competition[] = [];
  competitionSubject = new Subject<Competition[]>();

  emitCompetition() {
    this.competitionSubject.next(this.competition);
  }

  async getList() {

    this.http
      .get<any[]>(`${GlobalConstants.apiURL}/competition/list`)
      .subscribe(
        (response) => {
          this.competition = response;
          this.emitCompetition();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

  }


}
