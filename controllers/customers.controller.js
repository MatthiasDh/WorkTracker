//customers.controller beheert de data van de customers tabel in de mongodb
var express = require('express');
var router = express.Router();
var customerService = require('../services/customer.service');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/:_id',getById);
router.get('/', getAll);
router.get('/current', getCurrent);
router.put('/:_id', update);
router.delete('/:_id', _delete);
router.get('/getcustomersfromuser/:_id',getCustomersFromUser);

module.exports = router;

//Wanneer in de url authenticate wordt aangeroepen dan wordt deze methode aangeroepen.
function authenticate(req, res) {
    customerService.authenticate(req.body.username, req.body.password)
        .then(function(customer) {
            if (customer) {
                // authentication successful
                res.send(customer);
            } else {
                // authentication failed
                res.status(400).send('username or password is incorrect');
            }
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function getCustomersFromUser(req,res) {
    customerService.getCustomersFromUser(req.params._id)
        .then(function(customers) {
            res.send(customers);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function register(req, res) {
    customerService.create(req.body)
        .then(function() {
            res.sendStatus(200);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    customerService.getAll()
        .then(function(customers) {
            res.send(customers);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function getCurrent(req, res) {
    customerService.getById(req.customer.sub)
        .then(function(customer) {
            if (customer) {
                res.send(customer);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function getById(req, res) {
    customerService.getById(req.params._id)
        .then(function(customer) {
            if (customer) {
                res.send(customer);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    customerService.update(req.params._id, req.body)
        .then(function() {
            res.sendStatus(200);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
    customerService.delete(req.params._id)
        .then(function() {
            res.sendStatus(200);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}
