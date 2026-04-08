import request from 'supertest';
import assert from 'assert';
import app from '../server.js';

describe('API de Projetos', function() {
  it('GET /projetos deve retornar array de projetos', async function() {
    const res = await request(app).get('/projetos');
    assert.strictEqual(res.status, 200);
    assert.ok(Array.isArray(res.body));
    assert.ok(res.body.length >= 1, 'Deve conter pelo menos um projeto');
  });

  it('GET /projetos/2 deve retornar projeto com id 2', async function() {
    const res = await request(app).get('/projetos/2');
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.id, 2);
    assert.ok(res.body.nome);
  });

  it('GET /projetos/999 deve retornar 404 para não encontrado', async function() {
    const res = await request(app).get('/projetos/999');
    assert.strictEqual(res.status, 404);
  });
});
