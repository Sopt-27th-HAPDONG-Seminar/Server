const express = require('express');
const router = express.Router();
const creatorController = require('../../controller/creatorController');

//router.get('/new', creatorController.readNewCreatorProfile);
router.get('/all', creatorController.readAllCreators);

module.exports = router;