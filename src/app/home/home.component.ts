import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    //Nous verrons plus tard comment gérer cela avec des observables
    this.authService.isUserConnected();
  }

  get name() {
    return this.authService.user?.username || 'Anonymous';
  }

  navigateToCategories() {
    this.router.navigate(['/categories']);
  }
}
