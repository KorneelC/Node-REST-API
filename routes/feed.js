const express = require('express');

const feedController = require('../controller/feed')
const { body } = require('express-validator')

const router = express.Router();

router.get('/clothing', feedController.getClothing);

router.post('/posts', [
    body('title').trim().isLength({min:5}),
    body('content').trim().isLength({min:5})
], feedController.createPosts)
module.exports = router;