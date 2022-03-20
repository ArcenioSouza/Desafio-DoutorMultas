import { api } from './services/api';
import request from 'supertest';


describe('Verifica se requisições estão sendo feitas com sucesso', () => {
  it('Verifica requisição de marcas', async () => {
    const res = await request(api).get('/carros/marcas')
    jest.setTimeout(3000)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('nome')
  })

})
