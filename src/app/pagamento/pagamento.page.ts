import { Component } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage {
  listaDePizzas: any[] = [
    { nome: 'Pizza de Queijo', preco: 22.0, quantidade: 0 },
    { nome: 'Pizza de Calabresa', preco: 22.0, quantidade: 0 },
    { nome: 'Pizza de Frango', preco: 22.0, quantidade: 0 },
    { nome: 'Pizza de Presunto', preco: 22.0, quantidade: 0 },
    { nome: 'Pizza de Portuguêsa', preco: 22.0, quantidade: 0 },
    { nome: 'Pizza de 4 Queijos', preco: 22.0, quantidade: 0 },
    { nome: 'Pizza de Frango C/Cheddar', preco: 22.0, quantidade: 0 },
    { nome: 'Pizza de Frango C/Catupiry', preco: 22.0, quantidade: 0 },
    // Adicione outras pizzas conforme necessário
  ];

  quantidadeTotalPizzas: number = 0;
  valorTotal: number = 0;

  atualizarTotal() {
    this.quantidadeTotalPizzas = this.listaDePizzas.reduce((total, pizza) => total + pizza.quantidade, 0);
    this.valorTotal = this.listaDePizzas.reduce((total, pizza) => total + (pizza.preco * pizza.quantidade), 0);
  }

  diminuirQuantidade(pizza: any) {
    if (pizza.quantidade > 0) {
      pizza.quantidade--;
      this.atualizarTotal();
    }
  }

  aumentarQuantidade(pizza: any) {
    pizza.quantidade++;
    this.atualizarTotal();
  }

  resetarContagem() {
    this.listaDePizzas.forEach(pizza => pizza.quantidade = 0);
    this.atualizarTotal();
  }
}
