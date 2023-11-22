import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router) {}

  fazerLogin() {
    // Aqui você pode adicionar a lógica para o login
    // Por exemplo, autenticação de usuário

    // Após o login bem-sucedido, redireciona para a tab1
    this.router.navigateByUrl('/tabs/tab1');
  }

  irParaCadastro() {
    // Redireciona para a página de cadastro
    this.router.navigateByUrl('/cadastro');
  }
}