const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer_config');

const Thing = require('../models/thing');
const stuffController = require('../controllers/stuff');
const router = express.Router();

router.get('/', auth, stuffController.getAllThings);
router.post('/', auth, multer, stuffController.createThing);
router.get('/:id',  auth, stuffController.getOneThing)
router.put('/:id', auth, multer, stuffController.updateOneThing);
router.delete('/:id', auth,  stuffController.deleteThing);


module.exports = router