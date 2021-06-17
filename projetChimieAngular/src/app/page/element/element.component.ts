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
  private formH !: FormGroup;
  private formC !: FormGroup;
  private formN !: FormGroup;
  private formO !: FormGroup;
  constructor(private serviceElement: ElementService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(){
    this.formH = this.fb.group({
      nombre_atomique: [1],
      nom: ["Hydrogène"],
      symbole: ["H"],
      masse_atomique: [1]
    });
    this.formC = this.fb.group({
      nombre_atomique: [6],
      nom: ["Carbone"],
      symbole: ["C"],
      masse_atomique: [12]
    });
    this.formN = this.fb.group({
      nombre_atomique: [7],
      nom: ["Azote"],
      symbole: ["N"],
      masse_atomique: [14]
    });
    this.formO = this.fb.group({
      nombre_atomique: [8],
      nom: ["Oxygène"],
      symbole: ["O"],
      masse_atomique: [16]
    });
  }
  ajoutH(): void {
    this.serviceElement.createElement(this.formH.value).subscribe(
      data => {
        window.location.reload();
      }
    );
  }
  ajoutC(): void {
    this.serviceElement.createElement(this.formC.value).subscribe(
      data => {
        window.location.reload();
      }
    );
  }
  ajoutN(): void {
    this.serviceElement.createElement(this.formN.value).subscribe(
      data => {
        window.location.reload();
      }
    );
  }
  ajoutO(): void {
    this.serviceElement.createElement(this.formO.value).subscribe(
      data => {
        window.location.reload();
      }
    );
  }
}
