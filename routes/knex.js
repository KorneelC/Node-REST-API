const express = require('express');

const knexDb = require('../controller/knexdb');

const router = express.Router();



router.get('/knex', knexDb.getPlaylists);
router.post('/knex', knexDb.postNewPlaylist);
router.put('/knex', knexDb.updatePlaylist);
router.delete('/knex',knexDb.deletePlaylist);


module.exports = router;