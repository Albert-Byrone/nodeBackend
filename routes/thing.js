const express = require('express');

const Thing = require('../models/thing');
const stuffController = require('../controllers/stuff');
const router = express.Router();

router.get('/', stuffController.getAllThings);
router.post('/', stuffController.createThing);
router.get('/:id', stuffController.getOneThing)
router.put('/:id',stuffController.updateOneThing);
router.delete('/:id', stuffController.deleteThing);


module.exports = router