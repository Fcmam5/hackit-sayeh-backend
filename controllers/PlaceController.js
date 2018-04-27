var PlaceModel = require('../models/PlaceModel.js');

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
        PlaceModel.find(function (err, Places) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Place.',
                    error: err
                });
            }
            return res.json(Places);
        });
    },

    /**
     * PlaceController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        PlaceModel.findOne({_id: id}, function (err, Place) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Place.',
                    error: err
                });
            }
            if (!Place) {
                return res.status(404).json({
                    message: 'No such Place'
                });
            }
            return res.json(Place);
        });
    },
  create: function(req, res) {

    var geopos = {'long': req.body.long, 'latt': req.body.latt};

    var Place = new PlaceModel({
      'name': req.body.name,
      'personnage': req.body.personnage,
      'type': req.body.type,
      'city': req.body.city,
      'geopos': geopos,
      'story': req.body.story,
      'xp': req.body.xp,
      'date': req.body.date,
      'visitors': req.body.visitors,
      'language': req.body.language,
      'questions': req.body.questions,
    });

    Place.save(function (err, Place) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating Place',
                error: err
            });
        }
        return res.status(201).json(Place);
    });
  }
};
