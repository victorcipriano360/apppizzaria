import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage {

  valorTotal: number = 0; // Valor total que será enviado para a página de pagamento

  constructor(private router: Router) {}

  // Função que redireciona para a página de pagamento com o valor total
  irParaPagamento() {
    // Enviar o valor total para a página de pagamento (usando queryParams)
    this.router.navigate(['/pagina-pagamento'], {
      queryParams: {
        valorTotal: this.valorTotal.toFixed(2), // Arredondar para 2 casas decimais
      },
    });
  }
}
