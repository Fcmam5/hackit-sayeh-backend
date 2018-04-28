var PaymentModel = require('../models/PaymentModel.js');

/**
 * PlaceController.js
 *
 * @description :: Server-side logic for managing Places.
 */
module.exports = {

    /**
     * PlaceController.list()
     */
    list: function (req, res) {
        PaymentModel.find(function (err, PaymentCopouns) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Payment data.',
                    error: err
                });
            }
            return res.json(PaymentCopouns);
        });
    },

    /**
     * PlaceController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        PaymentModel.findOne({_id: id}, function (err, PaymentCoupon) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting PaymentCoupon.',
                    error: err
                });
            }
            if (!PaymentCoupon) {
                return res.status(404).json({
                    message: 'No such PaymentCoupon'
                });
            }
            return res.json(PaymentCoupon);
        });
    },
  create: function(req, res) {
    var PaymentCoupon = new PaymentModel({
      'value': req.body.value,
      'price': req.body.price,
    });

    PaymentCoupon.save(function (err, coupon) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating Payment coupon',
                error: err
            });
        }
        return res.status(201).json(coupon);
    });
  },
  /**
    * Use coupon
    */
    //TODO add use =  req.user; used_on = Date.now();
    //isValid = false
  useCoupon: function(req, res) {
    var id = req.body.id;

    PaymentModel.findOne({_id: id}, function(err, PaymentCopoun) {
      if(err || !PaymentCopoun){
        return res.status(500).json({
            message: 'Error when creating Payment coupon',
            error: err
        });
      }
//console.log(PaymentCopoun);
      PaymentCopoun.user = req.user;
      PaymentCopoun.used_on = Date.now();
      PaymentCopoun.isValid = false;
      PaymentCopoun.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

      PaymentCopoun.save(function(error, newCoupon) {
        if (error || !newCoupon) {
          return res.status(500).json({
            message: 'Error when updating payment coupon',
            error: error
          })
        }

        return res.status(201).json(newCoupon);
      });
    })
  }
};
