import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private AuthService: AuthService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.router.navigate(['chamados'])
  }

  logout() {
    this.router.navigate(['login'])
    this.AuthService.logout()
    this.toast.info('Logout realizado com sucesso', 'Logout', { timeOut: 7000 })
  }

}
