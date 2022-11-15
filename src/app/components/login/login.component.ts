import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credenciais } from 'src/app/models/credenciais';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(private toast: ToastrService, private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logar() {
    this.service.authenticate(this.creds).subscribe(resposta => {
      this.service.successfullLogin(resposta.headers.get('Authorization').substring(7))
      this.router.navigate(['home'])

    }, () => {
      this.toast.error('Usuário e/ou senha inválidos!')
    })
  }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid
  }

}
