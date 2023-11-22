import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  constructor(private router: Router) {}

  fazerCadastro() {
    // Aqui você pode adicionar a lógica para o cadastro
    // Por exemplo, enviar dados para o backend ou salvar localmente

    // Após o cadastro bem-sucedido, redireciona para a página desejada, por exemplo, tab1
    this.router.navigateByUrl('/tabs/tab1');
  }
}
