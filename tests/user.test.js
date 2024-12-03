const request = require('supertest');
const app = require('../src/server'); // Importa o arquivo principal da sua aplicação

describe('POST /users/register', () => {
  it('should create a user successfully', async () => {
    const userData = {
      name: "Andre",
      last_name: "Costa",
      username: "andre01",
      email: "andre.costa@gmail.com",
      psw: "@2345678",
      cpf: "11111111111",
      gender: "M",
      birth: "20021121",
      cep: "53300010",
      city: "Olinda",
    };

    const response = await request(app).post('/users/register').send(userData);
    expect(response.statusCode).toBe(201); // Status de criação
    expect(response.body).toHaveProperty('id'); // Verifica se retornou um ID
    expect(response.body.name).toBe(userData.name); // Confirma que o nome foi salvo corretamente
  });

  it('should return an error for missing fields', async () => {
    const incompleteData = {
      name: "Andre",
      email: "andre.costa@gmail.com",
    };

    const response = await request(app).post('/users/register').send(incompleteData);
    expect(response.statusCode).toBe(400); // Status de erro
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toBe('Missing required fields');
  });
});
