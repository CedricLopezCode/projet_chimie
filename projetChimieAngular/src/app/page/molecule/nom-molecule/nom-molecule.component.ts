import { Component, OnInit } from '@angular/core';
import { Molecule } from '../molecule.model';

@Component({
  selector: 'nomMolecule',
  templateUrl: './nom-molecule.component.html',
  styleUrls: ['./nom-molecule.component.css']
})
export class NomMoleculeComponent implements OnInit {

  nom_complet!: String;
  radical = ["inconnu", "méth", "éth", "prop","but", "pent", "hex", "hept","oct", "non", "déc", "undéc","dodéc", "tridéc", "tétradéc", "pentadéc","hexadéc", "heptadéc", "ocatdéc", "nonadéc","icos", "hénicos", "docos", "tricos"];

  constructor() { }

  ngOnInit(): void {
  }

  genererNom(moleculeAAnalyser: Molecule): String{
    this.nom_complet = this.radical[moleculeAAnalyser.nb_C];
    if(moleculeAAnalyser.alcene){this.nom_complet += "-"+moleculeAAnalyser.numC_alcene+"-èn";}
    else if(moleculeAAnalyser.alcyne){this.nom_complet += "-"+moleculeAAnalyser.numC_alcene+"-yn";}
    else{this.nom_complet += "an";}

    if(moleculeAAnalyser.acide){this.nom_complet += "oïque";}
    else if(moleculeAAnalyser.aldehyde){this.nom_complet += "al";}
    else if(moleculeAAnalyser.cetone){this.nom_complet += "-"+moleculeAAnalyser.numC_cetone+"-one";}
    else if(moleculeAAnalyser.alcool){this.nom_complet += "-"+moleculeAAnalyser.numC_alcool+"-ol";}
    else if(moleculeAAnalyser.amine){this.nom_complet += "-"+moleculeAAnalyser.numC_amine+"-amine";}
    else {this.nom_complet += "e";}
    if(moleculeAAnalyser.acide){this.nom_complet = "acide "+ this.nom_complet;}
    return this.nom_complet;
  }


}