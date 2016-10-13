/**
 * Created by rahul on 11/10/16.
 */
var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    models.Task.findAll().then(function(tasks) {
        res.json(tasks);
    });
});

router.post('/', function(req, res, next) {
    models.Task.create({
        title: req.body.title
    }).then(function(task) {
        res.json(task);
    });
});

router.delete('/:id', function(req, res){
    console.log(req.params.id);
    models.Task.findById(req.params.id).then(function(task) {
        task.destroy().then(function(task) {
            res.json(task);
        });
    });
});

module.exports = router;
