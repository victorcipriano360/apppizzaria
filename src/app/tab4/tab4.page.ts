import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  nomeCompleto: string;
  username: string;
  userEmail: string;
  endereco: string;
  cep: string;
  userPhone: string;
  chavePix: string;

  constructor(private router: Router) {
    // Inicialização dos campos
    this.nomeCompleto = '';
    this.username = '';
    this.userEmail = '';
    this.endereco = '';
    this.cep = '';
    this.userPhone = '';
    this.chavePix = '';
  }

  salvarPerfil() {
    // Aqui você pode adicionar a lógica para salvar o perfil com os dados atualizados
    console.log('Perfil atualizado:', this.nomeCompleto, this.username, this.userEmail, this.endereco, this.cep, this.userPhone, this.chavePix);
    // Exemplo: chamada a um serviço para atualizar os dados no backend
    // this.userService.atualizarPerfil(this.nomeCompleto, this.username, this.userEmail, this.endereco, this.cep, this.userPhone, this.chavePix);
  }

  irParaLogin() {
    this.router.navigateByUrl('/login'); // Rota para a página de login, ajuste conforme necessário
  }
}
