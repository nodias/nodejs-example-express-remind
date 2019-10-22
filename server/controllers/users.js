let users = require('../models').users;

module.exports = {
    create(req, res) {
        return users.create({
            "email": req.body.email,
            "password": req.body.password,
            "name": req.body.name,
            "phoneNumber": req.body.phoneNumber,
        })
            .then(users => res.status(201).send(users))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return users.findAll()
            .then(users => res.status(201).send(users))
            .catch(error => res.status(400).send(error));
    }
};
