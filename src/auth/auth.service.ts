// Importa o decorator Injectable do NestJS, que permite que a classe seja injetável
import { Injectable } from '@nestjs/common';

// Importa o serviço de JWT do NestJS, que permite gerar e validar tokens JWT
import { JwtService } from '@nestjs/jwt';

// Importa o serviço de usuários, responsável por operações com usuários no banco de dados
import { UsuariosService } from '../usuarios/usuarios.service';

// Decorator que torna a classe injetável no sistema de dependências do NestJS
@Injectable()
export class AuthService {
  
  // Injeção dos serviços de usuários e JWT via construtor
  constructor(
    private usuariosService: UsuariosService, // Serviço de usuários
    private jwtService: JwtService              // Serviço de JWT
  ) {}

  // Método responsável por validar o usuário (email e senha)
  async validateUser(email: string, senha: string) {
    // Busca o usuário no banco de dados pelo email
    const user = await this.usuariosService.findByEmail(email);

    // Verifica se o usuário foi encontrado e se a senha bate
    if (user && user.senha === senha) {
      // Remove o campo senha do objeto do usuário por segurança
      const { senha, ...safeUser } = user;

      // Retorna os dados do usuário, exceto a senha
      return safeUser;
    }

    // Se não encontrar o usuário ou a senha estiver incorreta, retorna null
    return null;
  }

  // Método responsável por gerar o token JWT após login bem-sucedido
  async login(user: any) {
    // Define o payload do token, que contém o email e o id (sub) do usuário
    const payload = { email: user.email, sub: user.id };

    // Retorna um objeto contendo o token de acesso (access_token)
     const result = {
    access_token: this.jwtService.sign(payload),
    user,
  };

  console.log('🚀 Retornando do AuthService:', result);
  return result;
  }
}