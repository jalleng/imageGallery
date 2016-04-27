
var Image = require(__dirname + '/../models/image');
var express = require('express');
var jsonParser = require('body-parser').json();
var handleError = require(__dirname + '/../lib/handle_error');

var imagesRoute = module.exports = exports = express.Router();

imagesRoute.get('/images', function(req, res) {
  Image.find({}, function(err, data) {
    if (err) return handleError(err, res);
    res.json(data);
  });
});

imagesRoute.post('/images', jsonParser, function(req, res) {
  var newImage = new Image(req.body);
  newImage.save(function(err, data) {
    if (err) handleError(err, res);
    res.json(data);
  });
});

imagesRoute.put('/images/:id', jsonParser, function(req, res) {
  var newImageBody = req.body;
  delete newImageBody._id;
  Image.update({_id: req.params.id}, newImageBody, function(err, data) {
    if (err) return handleError(err, res);
    res.json({msg: 'success'});
  });
});

imagesRoute.delete('/images/:id', function(req, res) {
  Image.remove({_id: req.params.id}, function(err) {
    if (err) return handleError(err, res);
    res.json({msg: 'success'});
  });
});