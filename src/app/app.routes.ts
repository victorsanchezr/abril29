import { Routes } from '@angular/router';
import { ObtenertodosComponent } from './obtenertodos/obtenertodos.component';
import { OperacionesComponent } from './obtenertodos/operaciones/operaciones.component';


export const routes: Routes = [
    { path: '', component: ObtenertodosComponent ,children: [
    { path: 'edicion/:id', component: OperacionesComponent },
    { path: 'edicion', component: OperacionesComponent }]},
   
];
