const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');

describe('alchemy-app routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });
});

it('should sign up a new user with a POST', async () => {
  const res = await request(app)
  .post('/api/v1/auth/signup')
  .send({ email: 'banana@fruit.com', password: 'fruitlord_420' });

  expect(res.body).toEqual({
    id: expect.any(String), 
    email: 'banana@fruit.com'
  })
})