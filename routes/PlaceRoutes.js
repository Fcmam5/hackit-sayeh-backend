var express = require('express');
var router = express.Router();
var PlaceController = require('../controllers/PlaceController.js');
var helper = require('./helperFunctions');
/*
 * GET
 */
router.get('/', PlaceController.list);

/*
 * GET
 */
router.get('/:id', PlaceController.show);

/*
 * Create a new user
 */
// router.post('/', helper.isLoggedIn, PlaceController.create)
router.post('/', PlaceController.create)

/*
 * Update
 */
// router.post('/update', helper.isLoggedIn, PlaceController.update)

module.exports = router;
