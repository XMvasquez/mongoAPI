const express = require('express');
const router = express.Router();
const controllerReactions = require('../controllers/ContollerSumaryReactions');
const controllerComments = require('../controllers/ControllerComments')

router.get('/reactions/:objectid/:reactionid', controllerReactions.getDocument);
router.get('/comments/:objectid', controllerComments.getDocumentsByObjectId);

module.exports = router;



