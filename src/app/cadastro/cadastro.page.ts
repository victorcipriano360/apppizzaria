import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  nomeCompleto: string = '';
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  fazerCadastro() {
    this.authService.register(this.nomeCompleto, this.username, this.password).then((registered: boolean) => {
      if (registered) {
        this.router.navigateByUrl('/tabs/tab1'); // Redirecionar para a tab1 após o cadastro bem-sucedido
      } else {
        // Lidar com o registro inválido
        console.error('Erro ao registrar o usuário.');
      }
    });
  }

  irParaTab1() {
    this.router.navigateByUrl('/tabs/tab1'); // Adicionando navegação para a tab1
  }
}
