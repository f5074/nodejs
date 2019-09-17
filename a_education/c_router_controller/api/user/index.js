const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/users', controller.index);

router.get('/users/:id', controller.show);

router.delete('/users/:id', controller.destroy);

router.post('/users', controller.create);



module.exports = router;