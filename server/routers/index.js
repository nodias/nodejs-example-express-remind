const usersController = require('../controllers').users;

module.exports = (app) => {
    app.get('/api/users', usersController.fetchAll);
    app.get('/api/users/:userId', usersController.fetch);
    app.post('/api/users', usersController.create);
    app.put('/api/users/:userId', usersController.update);
    app.delete('/api/users/:userId', usersController.delete);
};