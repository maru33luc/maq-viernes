import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us/about-us.component';

export const routes: Routes = [
    {
        path: 'about', loadComponent: () => import('./about-us/about-us/about-us.component').then(m =>m.AboutUsComponent)
    }
];
