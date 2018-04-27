var express = require('express');
var router = express.Router();
var PlaceController = require('../controllers/PlaceController.js');
var helper = require('./helperFunctions');
/*
 * GET
 */
router.get('/', PlaceController.list);
router.get('/hcd', PlaceController.hardcodedlist);

/*
 * GET
 */
router.get('/:id', PlaceController.show);


/*
 * Create a new user
 */
// router.post('/', helper.isLoggedIn, PlaceController.create)
router.post('/', PlaceController.create);

/*
 * Remove a monument model by a given ID
 */
router.post('/remove', PlaceController.remove);

/*
 * Edit a monument model for a given ID
 */
router.post('/edit', PlaceController.edit);

/*
 * Update
 */
// router.post('/update', helper.isLoggedIn, PlaceController.update)

module.exports = router;
