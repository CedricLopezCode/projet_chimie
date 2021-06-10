import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementComponent } from './page/element/element.component';
import { HomeComponent } from './page/home/home.component';
import { MoleculeComponent } from './page/molecule/molecule.component';
import { RetrosyntheseComponent } from './page/retrosynthese/retrosynthese.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'atomes', component: ElementComponent },
  { path: 'molecule', component: MoleculeComponent },
  { path: 'retrosynthese', component: RetrosyntheseComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
