var express = require('express');
var router = express.Router();
var PaymentController = require('../controllers/PaymentController.js');
var helper = require('./helperFunctions');
/*
 * GET
 */
router.get('/', PaymentController.list);

/*
 * GET
 */
router.get('/:id', PaymentController.show);

/*
 * Create a new user
 */
// router.post('/', helper.isLoggedIn, PlaceController.create)
// TODO use it with help.isLoggedIn
router.post('/', PaymentController.create);

/**
  * When a user uses a charging card he will send a POST where we log his traces
  */
// TODO use it with help.isLoggedIn
router.post('/pay', PaymentController.useCoupon);

module.exports = router;
