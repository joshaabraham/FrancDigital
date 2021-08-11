import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionAvecComponent } from './connexion-avec/connexion-avec.component';
import { EnregistrementComponent } from './enregistrement/enregistrement.component';
import { RecuperationMdpComponent } from './recuperation-mdp/recuperation-mdp.component';

const routes: Routes = [
  { path: '', component: EnregistrementComponent},
  { path: 'recuperation', component: RecuperationMdpComponent},
  { path: 'connexionAvec', component: ConnexionAvecComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeConnecterRoutingModule { }
