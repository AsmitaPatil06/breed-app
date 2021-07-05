import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageServiceService } from './image-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  isAuthenticated: false;
  constructor(private is: ImageServiceService, private router: Router) {}

  canActivate() {
    if (this.is.isAuthenticated()) {
      return true;
    } else {
      window.alert("You don't have permission to view this page");
      this.router.navigate(['form']);
      return false;
    }
  }
}
