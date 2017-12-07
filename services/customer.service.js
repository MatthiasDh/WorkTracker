var config = require('../config/database');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.database, { native_parser: true });
db.bind('customers');

var service = {};

service.authenticate = authenticate;
service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;
service.getCustomersFromUser = getCustomersFromUser;

module.exports = service;

function authenticate(username, password) {
    var deferred = Q.defer();

    db.customers.findOne({ username: username }, function(err, customer) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (customer && bcrypt.compareSync(password, customer.hash)) {
            //Authentication successful
            deferred.resolve({
                _id: customer._id,
                _userId: customer._userId,
                isFinished: customer.isFinished,
                isStarted: customer.isStarted,
                usedProducts: customer.usedProducts,
                username: customer.username,
                firstName: customer.firstName,
                lastName: customer.lastName,
                todoItems: customer.todoItems,
                inProgressItems: customer.inProgressItems,
                doneItems: customer.doneItems,
                token: jwt.sign({ sub: customer._id }, config.secret)
            });
        } else {
            //Authentication failed
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function getCustomersFromUser(_id) {
    var deferred = Q.defer();

    db.customers.find({_userId : _id}).toArray(function(err, customers) {
        if (err) deferred.reject(err.name + ': ' + err.message);
                //Return customers (without hashed passwords)
                customers = _.map(customers, function(customer) {
                    return _.omit(customer, 'hash');
                });
        
                deferred.resolve(customers);
        }
    );
    return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();

    db.customers.find().toArray(function(err, customers) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        //Return customers (without hashed passwords)
        customers = _.map(customers, function(customer) {
            return _.omit(customer, 'hash');
        });

        deferred.resolve(customers);
    });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.customers.findById(_id, function(err, customer) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (customer) {
            //Return customer (without hashed password)
            deferred.resolve(_.omit(customer, 'hash'));
        } else {
            //Customer not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(customerParam) {
    var deferred = Q.defer();

    //Validation
    db.customers.findOne({ username: customerParam.username },
        function(err, customer) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (customer) {
                //Username already exists
                deferred.reject('username "' + customerParam.username + '" is already taken');
            } else {
                createCustomer();
            }
        });

    function createCustomer() {
        //Set customer object to customerParam without the cleartext password
        var customer = _.omit(customerParam, 'password');

        //Add hashed password to customer object
        customer.hash = bcrypt.hashSync(customerParam.password, 10);

        db.customers.insert(
            customer,
            function(err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function update(_id, customerParam) {
    var deferred = Q.defer();

    //Validation
    db.customers.findById(_id, function(err, customer) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (customer.username !== customerParam.username) {
            //Username has changed so check if the new username is already taken
            db.customers.findOne({ username: customerParam.username },
                function(err, customer) {
                    if (err) deferred.reject(err.name + ': ' + err.message);

                    if (customer) {
                        //Username already exists
                        deferred.reject('username "' + req.body.username + '" is already taken')
                    } else {
                        updateCustomer();
                    }
                });
        } else {
            updateCustomer();
        }
    });

    function updateCustomer() {
        //Fields to update
        var set = {
            firstName: customerParam.firstName,
            lastName: customerParam.lastName,
            username: customerParam.username,
            usedProducts: customerParam.usedProducts,
            isStarted: customerParam.isStarted,
            isFinished: customerParam.isFinished,
            todoItems: customerParam.todoItems,
            inProgressItems: customerParam.inProgressItems,
            doneItems: customerParam.doneItems,
        };

        //Update password if it was entered
        if (customerParam.password) {
            set.hash = bcrypt.hashSync(customerParam.password, 10);
        }

        db.customers.update({ _id: mongo.helper.toObjectID(_id) }, { $set: set },
            function(err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    db.customers.remove({ _id: mongo.helper.toObjectID(_id) },
        function(err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}