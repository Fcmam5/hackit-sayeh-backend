var mongoose = require('mongoose');

var PaymentSchema = mongoose.Schema({  code : String,  user : {    type: mongoose.Schema.Types.ObjectId,    ref: 'User'  },  generated_on: {    type: Date,    default: Date.now  },  used_on: Date,  value: Number,  price: Number,  ip: String,  isValid: {type: Boolean, default: true}});

PaymentSchema.pre('save', function(cb) {
  // TODO check if the code doesn't exsits before before subbmitting a new record
  this.code = new Date().getTime() + (Math.floor(Math.random() * 8999 ) + 1000);
  cb();
});




module.exports = mongoose.model('Payment', PaymentSchema);
