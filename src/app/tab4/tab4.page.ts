import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  userName: string;
  userEmail: string;
  userPhone: string;
  userAddress: string;

  constructor() {
    this.userName = '';
    this.userEmail = '';
    this.userPhone = '';
    this.userAddress = '';
  }

  salvarPerfil() {
    // Aqui você pode adicionar a lógica para salvar o perfil com os dados atualizados
    console.log('Perfil atualizado:', this.userName, this.userEmail, this.userPhone, this.userAddress);
  }
}
