import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service'; // Importe seu AuthService aqui

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  nomeCompleto: string = '';
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // O código aqui é executado quando o componente é inicializado
  }

  fazerCadastro() {
    // Aqui você pode adicionar a lógica para o cadastro
    // Por exemplo, enviar dados para o backend ou salvar localmente
    // Após o cadastro bem-sucedido, redireciona para a página desejada, por exemplo, tab1

    this.authService.register(this.nomeCompleto, this.username, this.password).then((registered: boolean) => {
      if (registered) {
        // Lidar com o registro bem-sucedido (opcional)
        this.router.navigateByUrl('/tabs/tab1');
      } else {
        // Lidar com o registro inválido (opcional)
        console.error('Erro ao registrar o usuário.');
      }
    });
  }
}
