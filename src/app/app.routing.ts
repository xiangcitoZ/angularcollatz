import { CollatzComponent } from "./components/collatz/collatz.component";


//NECSITAMOS LOS SIGUIENTES MODULOS PARA REALIZAR ROUTING
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

//DEFINIMOS UN ARRRAY DE OBJETOS Routes
const appRoutes: Routes = [
    {path: "collatz", component: CollatzComponent},
    
 
]

//DE ESTA CLASE DEBEMOS EXPLOTAR DOS ELEMENTOS PARA app.module.ts
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);
