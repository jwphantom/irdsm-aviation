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
      name: "Hôtesse de l’air / stewards",
      duration: "12"
    },
    {
      name: "Agent Technique d’Exploitation",
      duration: "12"
    },
    {
      name: "Douane Import / Export",
      duration: "06"
    },
    {
      name: "Informatique des systemes de contrôle",
      duration: "12"
    },
    {
      name: "Investissement et developpement",
      duration: "004"
    },
    {
      name: "sécrétaires et cadres administratifs",
      duration: "004"
    }, {
      name: "Licence de pilote de ligne",
      duration: "32"
    },
    {
      name: "Agent de passage escale aéroportuaire",
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
    },
    {
      name: "Tourisme et loisirs",
      duration: "004"
    },
    {
      name: "Logistique et transport",
      duration: "004"
    }
  ];



  dateComp = [
    {
      code: "240224",
      name: "Concours du 27 Avril 2024",
    }
  ];


  listConcours = [
    {
      code: "240224",
      name: "Concours du 27 Avril 2024",
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
