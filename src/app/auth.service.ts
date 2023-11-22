import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): Promise<boolean> {
    // Lógica de autenticação aqui
    // Verifique as credenciais e retorne uma Promise com true se for autenticado com sucesso ou false caso contrário
    // Exemplo simples de verificação (substitua por lógica real de autenticação)
    if (username === 'user' && password === 'password') {
      // Simulando uma autenticação bem-sucedida
      localStorage.setItem('token', 'meuTokenJWT');
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  }

  logout(): void {
    // Lógica de logout aqui
    // Limpe o token JWT ou outras informações de autenticação
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    // Verifique se o usuário está autenticado
    // Implemente a lógica para verificar se o token JWT está presente ou se outras informações de autenticação estão corretas
    return !!localStorage.getItem('token');
  }
}
