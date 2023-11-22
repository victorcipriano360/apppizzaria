import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service'; // Verifique o caminho correto para o seu AuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = ''; // Inicializando as propriedades username e password
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  fazerLogin() {
    this.authService.login(this.username, this.password).then((authenticated: boolean) => {
      if (authenticated) {
        // Redirecionar para a página após o login bem-sucedido
        this.router.navigateByUrl('/tabs'); // Substitua '/tabs' pela rota desejada após o login
      } else {
        // Mostrar mensagem de erro ou lidar com o login inválido
      }
    });
  }

  irParaCadastro() {
    // Redirecionar para a página de cadastro
    this.router.navigateByUrl('/cadastro');
  }
}
