import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { FooterComponent } from './general/footer/footer.component';
import { ContenuComponent } from './general/contenu/contenu.component';
import { ElementComponent } from './page/element/element.component';
import { MoleculeComponent } from './page/molecule/molecule.component';
import { RetrosyntheseComponent } from './page/retrosynthese/retrosynthese.component';
import { HomeComponent } from './page/home/home.component';
import { ListeElementComponent } from './page/element/liste-element/liste-element.component';
import { FormElementComponent } from './page/element/form-element/form-element.component';
import { FormMoleculeComponent } from './page/molecule/form-molecule/form-molecule.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { InfoMoleculeComponent } from './page/molecule/info-molecule/info-molecule.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContenuComponent,
    ElementComponent,
    MoleculeComponent,
    RetrosyntheseComponent,
    HomeComponent,
    ListeElementComponent,
    FormElementComponent,
    FormMoleculeComponent,
    InfoMoleculeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
