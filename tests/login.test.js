const request = require('supertest');
const app = require('../app'); // Ajuste o caminho conforme sua estrutura de pastas

describe('POST /users/login', () => {
  it('should login successfully with valid credentials', async () => {
    const loginData = {
      username: 'andre2',
      psw: '@2345678',
    };

    const response = await request(app)
      .post('/users/login')
      .send(loginData);

    expect(response.statusCode).toBe(200); // Status de sucesso
    expect(response.body).toHaveProperty('message', 'Login successful');
    expect(response.body).toHaveProperty('token'); // Verifica se retornou um token
  });

  it('should return an error for invalid credentials', async () => {
    const loginData = {
      username: 'wrong_user',
      psw: 'wrong_password',
    };

    const response = await request(app)
      .post('/users/login')
      .send(loginData);

    expect(response.statusCode).toBe(401); // Status de erro de autenticação
    expect(response.body).toHaveProperty('error', 'Invalid credentials');
  });
});
