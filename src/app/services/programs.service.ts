import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {


  programsSubject = new Subject<any[]>();
  dateCompSubject = new Subject<any[]>();
  nEtudeSubject = new Subject<any[]>();


  constructor() { }

  programs = [
    {
      code: "PLT",
      name: "Licence de pilote de ligne",
      duration: "03"
    },
    {
      code: "ATE",
      name: "Agent Technique D'exploitation",
      duration: "004"
    },
    {
      code: "MDG",
      name: "Marchandise Dangereuse",
      duration: "004"
    },
    {
      code: "PNC",
      name: "Hôtesse de l'air / Steward",
      duration: "004"
    },
  ];

  dateComp = [
    {
      code: "022022",
      name: "Concours du 22 Février 2022",
    }
  ];

  nEtdute = [
    {
      code: "M",
      name: "Master ou Equivalent",
    }, 
    {
      code: "L",
      name: "Licence ou Equivalent",
    }, 
    {
      code: "BTS",
      name: "Brévet de Technicien Supérieur ou Equivalent",
    },
    {
      code: "BAC",
      name: "Baccalauréat ou Equivalent",
    },
    {
      code: "PROB",
      name: "Probatoire ou Equivalent",
    },
    {
      code: "BEPC",
      name: "BEPC ou Equivalent",
    }
  ];

  emitProgramsSubject() {
    this.programsSubject.next(this.programs.slice());
  }

  emitDateSubject() {
    this.dateCompSubject.next(this.dateComp.slice());
  }

  emitnEtudeSubject() {
    this.nEtudeSubject.next(this.nEtdute.slice());
  }

}
