import { Component, OnInit } from '@angular/core';
import { ElementService } from '../element.service';
import { Element } from '../element.model';

@Component({
  selector: 'liste_element',
  templateUrl: './liste-element.component.html',
  styleUrls: ['./liste-element.component.css']
})
export class ListeElementComponent implements OnInit {

  listeElements!: Element[];

  constructor(private serviceElement: ElementService) { }

  ngOnInit(): void {
    this.serviceElement.listeElements().subscribe(
      data => {this.listeElements = data;}
    );
  }
  deleteElement(id: number, value: any): void{
    console.log("ts "+id);
    this.serviceElement.deleteElement(id).subscribe(
      data => {
        console.log(data);
       window.location.reload();
      }
    );
  }

}
