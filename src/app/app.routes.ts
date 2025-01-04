import { Routes } from '@angular/router';
import { TicketComponent } from './components/ticket/ticket.component';
import { SupportComponent } from './components/support/support.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Redirect to login by default
  { path: 'ticket', component: TicketComponent }, // Ticket route
  { path: 'support', component: SupportComponent }, // Support route
  { path: 'auth/register', component: RegisterComponent }, // Register route
  { path: 'auth/login', component: LoginComponent }, // Login route
  { path: 'enseignant', component: EnseignantComponent }, // Enseignant dashboard
  { path: 'etudiant', component: EtudiantComponent }, // Étudiant dashboard
  { path: '**', redirectTo: '/auth/login' }, // Wildcard route (fallback to login)
];
