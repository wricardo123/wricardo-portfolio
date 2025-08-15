import { Routes } from '@angular/router';
// import { HomeComponent } from '';
// import { AboutComponent } from './pages/about/about.component';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Resume } from './pages/resume/resume';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'projects', component: Projects },
    { path: 'resume', component: Resume },
];
