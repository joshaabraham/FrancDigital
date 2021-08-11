import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntrouvableComponent } from './pages/introuvable/introuvable.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/First/first/first.module').then(m => m.FirstModule) },
  { path: 'enregistrer', loadChildren: () => import('./pages/se-connecter/enregistrement/enregistrement.module').then(m => m.EnregistrementModule) },
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
