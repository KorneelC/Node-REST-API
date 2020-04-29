const express = require('express');

const knexDb = require('../controller/knexdb');

const router = express.Router();



router.get('/knex', knexDb.getPlaylists);
router.post('/knex', knexDb.PostNewPlaylist);


module.exports = router;