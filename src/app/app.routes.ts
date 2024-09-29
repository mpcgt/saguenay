import { Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { DiscoveryComponent } from './components/pages/discovery/discovery.component';
import { SavedComponent } from './components/pages/saved/saved.component';
import { NotificationsComponent } from './components/pages/notifications/notifications.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AboutComponent } from './components/pages/about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'discovery', component: DiscoveryComponent },
    { path: 'saved', component: SavedComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'about', component: AboutComponent }
];