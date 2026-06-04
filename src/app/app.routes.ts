import { Principal } from './principal/principal';
import { Routes } from '@angular/router';

export const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: 'principal'},
 { path:'principal', component: Principal }
];
