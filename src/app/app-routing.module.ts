import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitlePageComponent } from './title-page/title-page.component';
import { BioPageComponent } from './bio-page/bio-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'title', pathMatch: 'full'},
  {path: 'title', component: TitlePageComponent},
  {path: 'bio', component: BioPageComponent},
  {path: '**', redirectTo: 'title'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
