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
      name: "Licence de pilote de ligne",
      duration: "03"
    },
    {
      name: "Pilote hélicoptère",
      duration: "03"
    },
    {
      name: "Hôtesse de l’air / stewards",
      duration: "004"
    },
    {
      name: "Douane Import / Export",
      duration: "004"
    },
    {
      name: "Technicien Maintenance aéronautique",
      duration: "03"
    },
    {
      name: "Ingénieur Maintenance aéronautique",
      duration: "004"
    },
    {
      name: "Avionique",
      duration: "004"
    },
    {
      name: "Ingénieur ou Technicien aviation civile",
      duration: "004"
    },
    {
      name: "Agent Technique d’Exploitation",
      duration: "004"
    },
    {
      name: "Agent de services commerciaux",
      duration: "004"
    },
    {
      name: "Agent de passage escale aéroportuaire ",
      duration: "004"
    },
    {
      name: "Superviseur et agent d’escale aéroportuaire",
      duration: "004"
    },
    {
      name: "Passage sol",
      duration: "004"
    },
    {
      name: "Agent d’accompagnement aéroportuaire de passagers à mobilité réduite",
      duration: "03"
    },
    {
      name: "Agent Fret ; Import/Export ; Transitaire ; Magasinier",
      duration: "03"
    },
    {
      name: "Spécialiste passage vente",
      duration: "004"
    },
    {
      name: "Agent billetterie",
      duration: "03"
    },
    {
      name: "Hôtesse d’accueil",
      duration: "004"
    },
    {
      name: "Spécialiste catering",
      duration: "004"
    },
    {
      name: "Agent litiges bagages",
      duration: "004"
    },
    {
      name: "Spécialiste marchandises dangereuses",
      duration: "004"
    },
    {
      name: "Agent de voyage",
      duration: "004"
    },
    {
      name: "Conducteurs d’engins",
      duration: "004"
    },
    {
      name: "Conducteurs push back",
      duration: "004"
    },
    {
      name: "Dégivreur",
      duration: "004"
    },
    {
      name: "Agents pistes",
      duration: "004"
    },
    {
      name: "Magasinier cariste",
      duration: "004"
    },
    {
      name: "Agent d’entretien et de nettoyage",
      duration: "004"
    },
    {
      name: "Supervision/ Contrôle",
      duration: "004"
    }
  ];



  dateComp = [
    {
      code: "140123",
      name: "Concours du 14 Janvier 2023",
    }
  ];


  listConcours = [
    {
      code: "140123",
      name: "Concours du 14 Janvier 2023",
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
