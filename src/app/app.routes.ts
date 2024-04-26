import { Routes } from '@angular/router';
import { ObtenertodosComponent } from './obtenertodos/obtenertodos.component';
import { MetodopostComponent } from './metodopost/metodopost.component';
import { MetododeleteComponent } from './metododelete/metododelete.component';

export const routes: Routes = [
    { path: 'obtenertodos', component: ObtenertodosComponent },
    { path: 'anadir', component: MetodopostComponent },
    { path: 'borrar', component: MetododeleteComponent },
];
