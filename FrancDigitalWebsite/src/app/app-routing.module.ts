import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstModule } from './pages/First/first/first.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/First/first/first.module').then(m => m.FirstModule) },
 // { path: '', loadChildren: () => import('../pages/First/first/FirstModule').then(m => m.FirstModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
