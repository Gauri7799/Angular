import { Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { InvalidComponent } from './invalid/invalid.component';
export const routes: Routes = [
    {path:'child1',component:Child1Component},
    {path:'child2',component:Child2Component},
    {path:'',component:Child1Component},
    {path:'**',component:InvalidComponent}

];