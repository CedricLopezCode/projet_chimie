import { Component, OnInit } from '@angular/core';
import { Element } from '../element.model';
import { ElementService } from '../element.service';

@Component({
  selector: 'form_element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {

  elementAAjouter = new Element();

  constructor(private serviceElement: ElementService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.serviceElement.createElement(this.elementAAjouter).subscribe(
      data => {
        this.elementAAjouter = new Element();
        window.location.reload();
      }
    );
  }

}
