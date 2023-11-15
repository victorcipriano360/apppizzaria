// Importe os módulos necessários do Angular e Ionic
import { Component } from '@angular/core';
import { UserService } from 'caminho/do/seu/servico/user.service'; // Importe o serviço do usuário, substitua pelo caminho correto

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  userName: string = ''; // Variável para armazenar o nome do usuário
  // Injete o serviço do usuário no construtor
  constructor(private userService: UserService) {
    this.carregarDadosPerfil(); // Carregue os dados do perfil ao entrar na página
  }

  carregarDadosPerfil() {
    // Simulando uma requisição para carregar dados do perfil ao entrar na página
    this.userService.getProfileData().subscribe((data: any) => {
      // Ao receber os dados, atribua os valores aos campos correspondentes, como userName
      this.userName = data.name;
      // Carregue outros dados do perfil, se houverem
    });
  }

  salvarPerfil() {
    // Simulando uma requisição para salvar as alterações no perfil do usuário
    this.userService.updateProfile({ name: this.userName }).subscribe(() => {
      console.log('Perfil atualizado com sucesso!');
    });
  }
}
