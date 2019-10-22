const usersController = require('../controllers').users;

module.exports = (app) => {
    app.get('/api/users', usersController.list);
    app.post('/api/users', usersController.create);
};