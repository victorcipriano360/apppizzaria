import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  fazerLogin() {
    this.authService.login(this.username, this.password).then((authenticated: boolean) => {
      if (authenticated) {
        this.router.navigateByUrl('/tabs/tab1'); // Redirecionar para a tab1 após o login bem-sucedido
      } else {
        // Lidar com o login inválido
        console.error('Login inválido');
      }
    });
  }

  irParaCadastro() {
    this.router.navigateByUrl('/cadastro');
  }

  irParaTab1() {
    this.router.navigateByUrl('/tabs/tab1'); // Adicionando navegação para a tab1
  }
}
