import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './pages/First/first/first.component';
import { IntrouvableComponent } from './pages/introuvable/introuvable.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
 // { path: '', loadChildren: () => import('./pages/First/first/first.module').then(m => m.FirstModule) },
  { path: 'enregistrer', loadChildren: () => import('./pages/se-connecter/se-connecter.module').then(m => m.SeConnecterModule) },
  { path: '**', component: IntrouvableComponent}
 // { path: '', loadChildren: () => import('../pages/First/first/FirstModule').then(m => m.FirstModule)}
  // {
  // path: '',
  // component: PagesComponent,
  // canActivate: [MetaGuard, AuthGuard, PasswordExpiryGuardService],
  // canActivateChild: [MetaGuard, AuthGuard, PasswordExpiryGuardService],
  // canLoad: [AuthGuard],
  // children: [
  //   {path: '', redirectTo: 'order', pathMatch: 'full'},
  //   ]
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
