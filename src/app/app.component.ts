import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { SupportComponent } from './components/support/support.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { RegisterComponent } from './auth/register/register.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    // LoginComponent,
    // EtudiantComponent,
    // EnseignantComponent,
    // SupportComponent,
    // TicketComponent,
    // RegisterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Front';
}
