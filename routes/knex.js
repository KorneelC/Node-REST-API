const express = require('express');

const knexDb = require('../controller/knexdb');

const router = express.Router();


router.post('/knex', knexDb.postUser);

router.get('/knex/:id', knexDb.getSpecificUser);
router.get('/knex', knexDb.getUser);


module.exports = router;