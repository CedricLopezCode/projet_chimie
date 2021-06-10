import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementComponent } from './page/element/element.component';
import { MoleculeComponent } from './page/molecule/molecule.component';
import { RetrosyntheseComponent } from './page/retrosynthese/retrosynthese.component';

const routes: Routes = [
  { path: 'pageElement', component: ElementComponent },
  { path: 'pageMolecule', component: MoleculeComponent },
  { path: 'pageRetrosynthese', component: RetrosyntheseComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
