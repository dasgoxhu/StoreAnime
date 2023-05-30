import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private servi: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.servi.CerrarSesion();
    this.router.navigate(['/inicio']);
  }

}
