import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [

 { path: '', pathMatch: 'full', redirectTo: 'cryptocurrency' },
 { path: 'cryptocurrency', loadChildren: () => import('./cryptocurrency/cryptocurrency.module').then(m => m.CryptocurrencyModule) },

];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
