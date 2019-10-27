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
    fetchAll(req, res) {
        return users.findAll()
            .then(users => res.status(201).send(users))
            .catch(error => res.status(400).send(error));
    },
    fetch(req, res) {
        return users.findOne({
                where: {id: req.params.userId},
            }
        )
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        return users.findByPk(req.params.userId)
            .then(users => {
                if (!users) {
                    return res.status(400).send({
                        message: "User Not Found"
                    })
                }
                return users.update({
                    email: req.body.email,
                    password: req.body.password,
                    name: req.body.name,
                    phoneNumber: req.body.phoneNumber,
                })
                    .then(user => res.status(200).send(user))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    },
    delete(req, res) {
        return users.findByPk(req.params.userId)
            .then(users => {
                    if (!users) {
                        return res.status(400).send({
                            message: 'User Not Found',
                        });
                    }
                    return users.destroy({
                        where: {id: req.params.userId},
                    })
                        .then(() => res.status(201).send())
                        .catch(error => res.status(400).send(error))
                }
            )
            .catch(error => res.status(400).send(error))
    }
};
