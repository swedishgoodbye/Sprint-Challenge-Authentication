const { authenticate } = require('../utils/middlewares');

const { getAllJokes, createUser, login } = require('../controllers');

module.exports = server => {
  server.get('/api/', (req, res) => {res.json({api: 'api... i am your father.'})});
  server.get('/api/jokes', authenticate, getAllJokes);
  server.route('/api/users').post(createUser);
  server.route('/api/login').post(login);
};
