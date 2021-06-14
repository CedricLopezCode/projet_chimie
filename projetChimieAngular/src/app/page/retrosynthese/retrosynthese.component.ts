import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'retrosynthese',
  templateUrl: './retrosynthese.component.html',
  styleUrls: ['./retrosynthese.component.css']
})
export class RetrosyntheseComponent implements OnInit {

  fonc!: String;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.fonc = this.route.snapshot.params.fonc;
    console.log("on init: " + this.fonc);
    //window.location.reload();
  }

  changRetro(nvfonc: String): void{
    this.fonc = nvfonc;
    this.router.navigate(['retrosynthese', nvfonc]);
  }
  

}
