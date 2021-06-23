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
  masse_molaire !: number;
  formule_brute_string !: String;
  suffixe !: boolean;
  fonction_principale !: String;
  
  nom_complet !: String;
  radical = ["inconnu", "méth", "éth", "prop","but", "pent", "hex", "hept","oct", "non", "déc", "undéc","dodéc", "tridéc", "tétradéc", "pentadéc","hexadéc", "heptadéc", "ocatdéc", "nonadéc","icos", "hénicos", "docos", "tricos"];
  
  
  nb_C_verif = new FormControl(1); 
  nb_H_verif = new FormControl('');
  nb_O_verif = new FormControl(0);
  nb_N_verif = new FormControl(0);
  alcene_verif = new FormControl('');
  alcyne_verif = new FormControl('');
  alcool_verif = new FormControl('');
  aldehyde_verif = new FormControl('');
  cetone_verif = new FormControl('');
  acide_verif = new FormControl('');
  amine_verif = new FormControl('');
  nb_C = Number(this.nb_C_verif.value); 
  nb_O = Number(this.nb_O_verif.value);
  nb_O_used = Number(this.moleculeAAnalyser.aldehyde) + Number(this.moleculeAAnalyser.alcool) + 2 * Number(this.moleculeAAnalyser.acide);
  nb_N = Number(this.nb_N_verif.value);
  nb_N_used = Number(this.moleculeAAnalyser.amine);
  nb_H = Number(this.nombre_de_H);

  constructor(private serviceMol: MoleculeService) { }

  ngOnInit(): void {
    this.nb_C = 1;
    this.nb_O = 0;
    this.nb_N = 0;
    this.nb_H = 4;
    this.nb_O_used = 0;
    this.nb_N_used = 0;
    this.formule_brute_string = "CH4";
    this.nom_complet = "méthane";
    this.masse_molaire = 16;
   // console.log(this.nb_H);
  }

  onSubmit(): void{
    this.serviceMol.createMolecule(this.moleculeAAnalyser).subscribe(
      data => {
        this.moleculeAAnalyser = new Molecule();
        this.genererNom();
        console.log(this.nom_complet);
      }
      )
  }

  maj(): void{
    this.maj_Nb_from_FC();
    this.formule_brut();
    this.calcul_MM();
    this.genererNom();

    this.nb_O_used = 0;
    if(this.alcool_verif.value){this.nb_O_used++;}     
    if(this.aldehyde_verif.value){this.nb_O_used++;}     
    if(this.cetone_verif.value){this.nb_O_used++;}          
    if(this.acide_verif.value){this.nb_O_used += 2;}
    this.nb_N_used = 0;
    if(this.amine_verif.value){this.nb_N_used++;}        
  }

  maj_Nb_from_FC(){
    this.nb_C = Number(this.nb_C_verif.value); 
    this.nb_O = Number(this.nb_O_verif.value);
    this.nb_N = Number(this.nb_N_verif.value);
    this.nb_H = this.calcul_nombre_de_H();
  }

  calcul_nombre_de_H() : number{
    this.nombre_de_H = 0;          
    this.nombre_de_H = 2 * this.nb_C + 2;     
    this.nombre_de_H += this.nb_N;    
    if(this.alcene_verif.value){this.nombre_de_H -= 2};
    if(this.alcyne_verif.value){this.nombre_de_H -= 4};         
    if(this.aldehyde_verif.value){this.nombre_de_H -= 2};       
    if(this.cetone_verif.value){this.nombre_de_H -= 2};         
    if(this.acide_verif.value){this.nombre_de_H -= 2}
    this.nb_H = this.nombre_de_H; 
    return this.nombre_de_H;
  }

  formule_brut(): String{
    this.formule_brute_string = ""; 
    this.formule_brute_string += "C"+this.nb_C;
    if(this.nb_H > 0){this.formule_brute_string += "H"+this.nb_H;}
   // console.log("H= " +this.formule_brute_string);
    if(this.nb_O > 0){this.formule_brute_string += "O"+this.nb_O;}
    if(this.nb_N > 0){this.formule_brute_string += "N"+this.nb_N;}
    return this.formule_brute_string;
  }

  calcul_MM(): number{
   // console.log("debut MM = " +this.masse_molaire);
    this.masse_molaire = 0;
    this.masse_molaire += 12 * this.nb_C;
    this.masse_molaire += 1 * this.nb_H;
    this.masse_molaire += 16 * this.nb_O;
    this.masse_molaire += 14 * this.nb_N;
   // console.log("fin MM= " +this.masse_molaire);
    return this.masse_molaire;
  }

  genererNom(): String{
    this.suffixe = true;

    //     Partie radical
    this.nom_complet = this.radical[this.nb_C];
    if(this.alcene_verif.value){this.nom_complet += "-"+this.moleculeAAnalyser.alcene+"-èn";} 
    else if(this.alcyne_verif.value){this.nom_complet += "-"+this.moleculeAAnalyser.alcyne+"-yn";} 
    else{this.nom_complet += "an";} 

    //    Partie fonction principale (suffixe)
    if(this.acide_verif.value){
      this.nom_complet += "oïque";
      this.fonction_principale = "acide";
    }
    else if(this.aldehyde_verif.value){
      this.nom_complet += "al";
      this.fonction_principale = "aldehyde";
    }
    else if(this.cetone_verif.value){
      this.nom_complet += "-"+this.moleculeAAnalyser.cetone+"-one";
      this.fonction_principale = "cetone";
    }
    else if(this.alcool_verif.value){
      this.nom_complet += "-"+this.moleculeAAnalyser.alcool+"-ol";
      this.fonction_principale = "alcool";
    }
    else if(this.amine_verif.value){
      this.nom_complet += "-"+this.moleculeAAnalyser.amine+"-amine";
      this.fonction_principale = "amine";
    }
    else {
      this.nom_complet += "e";
      this.fonction_principale = "aucune";
    }
    this.suffixe = false;
/*
    //    Partie fonctions secondaires (prefixe) sans répétition (sans break)
    console.log(this.fonction_principale);
    switch (this.fonction_principale){ 
      case "acide":     
        //  if(this.aldehyde_verif.value){this.nom_complet =+ ""+"oxo";}
        console.log("acide principale");
         
      case "aldehyde":  
         // if(this.cetone_verif.value){this.nom_complet =+ this.moleculeAAnalyser.cetone+"-oxo";}
         console.log("aaldeh principale");
         
      case "cetone":    
         // if(this.alcool_verif.value){this.nom_complet =+ this.moleculeAAnalyser.alcool+"-hydroxy";}
         console.log("cet principale");
          
      case "alcool":    
         // if(this.amine_verif.value){this.nom_complet =+ this.moleculeAAnalyser.amine+"-amino";}
         console.log("alxool principale");
         
      case "amine":     
          console.log("amine principale");
      break;
      default:  
        console.log("erreur prefixe");
      break;
    }
*/

    //    Partie fonctions secondaires (prefixe) avec repetitions (avec break)

    switch (this.fonction_principale){ 
      case "acide":     
          if(this.aldehyde_verif.value){this.nom_complet = ""+"oxo"+this.nom_complet;}
          if(this.cetone_verif.value){this.nom_complet = this.moleculeAAnalyser.cetone+"-oxo" + this.nom_complet;}
          if(this.alcool_verif.value){this.nom_complet = this.moleculeAAnalyser.alcool+"-hydroxy" + this.nom_complet;}
          if(this.amine_verif.value){this.nom_complet = this.moleculeAAnalyser.amine+"-amino" + this.nom_complet;}
      break;

      case "aldehyde":  
          if(this.cetone_verif.value){this.nom_complet = this.moleculeAAnalyser.cetone+"-oxo" + this.nom_complet;}
          if(this.alcool_verif.value){this.nom_complet = this.moleculeAAnalyser.alcool+"-hydroxy" + this.nom_complet;}
          if(this.amine_verif.value){this.nom_complet = this.moleculeAAnalyser.amine+"-amino" + this.nom_complet;}
      break;
         
      case "cetone":    
          if(this.alcool_verif.value){this.nom_complet = this.moleculeAAnalyser.alcool+"-hydroxy" + this.nom_complet;}
          if(this.amine_verif.value){this.nom_complet = this.moleculeAAnalyser.amine+"-amino" + this.nom_complet;}
      break;
          
      case "alcool":    
          if(this.amine_verif.value){this.nom_complet = this.moleculeAAnalyser.amine+"-amino" + this.nom_complet;}
      break;
         
      case "amine":     
          console.log("amine principale");
      break;
      default:  
        console.log("erreur prefixe");
      break;
    }
    if(this.acide_verif.value){this.nom_complet = "acide "+ this.nom_complet;}
    
    return this.nom_complet;
  }
}
