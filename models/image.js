var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
  imageUrl: String,
  imageDescription: {type: String, default: 'Image'}
});

module.exports = mongoose.model('Image', imageSchema);
