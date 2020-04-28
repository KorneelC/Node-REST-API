const express = require('express');

const dbConnection = require('../controller/db_connection');

const router = express.Router();

router.get('/myshop/:id', dbConnection.getSpecificClothing)
router.get('/myshop', dbConnection.getClothing);

router.post('/myshop', dbConnection.postClothing);

module.exports = router;
