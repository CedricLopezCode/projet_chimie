import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Molecule } from '../molecule.model';
import { MoleculeService } from '../molecule.service';

@Component({
  selector: 'form_molecule',
  templateUrl: './form-molecule.component.html',
  styleUrls: ['./form-molecule.component.css']
})
export class FormMoleculeComponent implements OnInit {

  moleculeAAnalyser = new Molecule();
  comptage = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  nombre_de_H !: number;
  


  nb_C_verif = new FormControl('');
  nb_H_verif = new FormControl('');
  nb_O_verif = new FormControl('');
  nb_N_verif = new FormControl('');
  alcene_verif = new FormControl('');
  alcyne_verif = new FormControl('');
  alcool_verif = new FormControl('');
  aldehyde_verif = new FormControl('');
  cetone_verif = new FormControl('');
  acide_verif = new FormControl('');
  amine_verif = new FormControl('');
  nb_C = Number(this.nb_C_verif.value);
  constructor(private serviceMol: MoleculeService ) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    this.serviceMol.createMolecule(this.moleculeAAnalyser).subscribe(
      data => {this.moleculeAAnalyser = new Molecule();}
    )
  }
  calcul_nombre_de_H() : number{
   /* this.nombre_de_H = 2 * this.moleculeAAnalyser.nb_C + 2;
    this.nombre_de_H += this.moleculeAAnalyser.nb_N;
    if(this.alcene_verif){this.nombre_de_H -= 2};
    if(this.alcyne_verif){this.nombre_de_H -= 2};
    if(this.aldehyde_verif){this.nombre_de_H -= 2};
    if(this.cetone_verif){this.nombre_de_H -= 2};
    if(this.acide_verif){this.nombre_de_H -= 2};*/
    console.log("tes");
    return this.nombre_de_H;
  }

}
