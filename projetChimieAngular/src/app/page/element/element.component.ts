import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ElementService } from './element.service';

@Component({
  selector: 'element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  elementAAjouter !: Element;
  H !: Element;
  private formel !: FormGroup;
  constructor(private serviceElement: ElementService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(){
    this.formel = this.fb.group({
      nombre_atomique: ["1"],
      nom: ["Hydrogène"],
      symbole: ["H"],
      masse_atomique: ["1"]
    })
  }
  ajoutH(): void {
    this.serviceElement.createElement(this.formel.value).subscribe(
      data => {
        console.log("composant");
       /* this.elementAAjouter = new Element();
        this.elementAAjouter.setAttribute("nombre_atomique", "1");
        this.elementAAjouter.setAttribute("nom", "Hydrogène");
        this.elementAAjouter.setAttribute("symbole", "H");
        this.elementAAjouter.setAttribute("masse_atomique", "1");
        //window.location.reload();
        console.log(this.elementAAjouter);*/
      }
    );
  }





  ajoutC(): void {
    this.elementAAjouter = new Element();
    this.elementAAjouter.setAttribute("nombre_atomique", "6");
    this.elementAAjouter.setAttribute("nom", "Carbone");
    this.elementAAjouter.setAttribute("symbole", "C");
    this.elementAAjouter.setAttribute("masse_atomique", "12");
    this.serviceElement.createElement(this.elementAAjouter).subscribe(
      data => {
        this.elementAAjouter = new Element();
        window.location.reload();
      }
    );
  }
  ajoutN(): void {
    this.elementAAjouter = new Element();
    this.elementAAjouter.setAttribute("nombre_atomique", "7");
    this.elementAAjouter.setAttribute("nom", "Azote");
    this.elementAAjouter.setAttribute("symbole", "N");
    this.elementAAjouter.setAttribute("masse_atomique", "14");
    this.serviceElement.createElement(this.elementAAjouter).subscribe(
      data => {
        this.elementAAjouter = new Element();
        window.location.reload();
      }
    );
  }
  ajoutO(): void {
    this.elementAAjouter = new Element();
    this.elementAAjouter.setAttribute("nombre_atomique", "8");
    this.elementAAjouter.setAttribute("nom", "Oxygène");
    this.elementAAjouter.setAttribute("symbole", "O");
    this.elementAAjouter.setAttribute("masse_atomique", "12");
    this.serviceElement.createElement(this.elementAAjouter).subscribe(
      data => {
        this.elementAAjouter = new Element();
        window.location.reload();
      }
    );
  }
}
