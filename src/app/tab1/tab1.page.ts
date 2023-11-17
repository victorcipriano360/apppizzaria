import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  anuncios = [
    { imagemUrl: 'caminho_para_imagem_1.jpg' },
    { imagemUrl: 'caminho_para_imagem_2.jpg' },
    { imagemUrl: 'caminho_para_imagem_3.jpg' },
    // Adicione mais URLs de imagens conforme necessário
  ];
}
