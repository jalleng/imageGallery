
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
process.env.MONGO_URL = 'mongodb://localhost/images_test';
require(__dirname + '/../server.js');
var mongoose = require('mongoose');
var url = 'localhost:3000/api';
var Image = require(__dirname + '/../models/image');

describe('the images resource', function() {
  after(function(done) {
    mongoose.connection.db.dropDatabase(function(err) {
      if (err) throw err;
      done();
    });
  });

  it('should be able to get the images', function(done) {
    chai.request(url)
      .get('/images')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(Array.isArray(res.body)).to.eql(true);
        done();
      });
  });

  it('should be able add an image', function(done) {
    chai.request(url)
      .post('/images')
      .send({imageUrl: 'test Url'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.imageUrl).to.eql('test Url');
        expect(res.body.imageDescription).to.eql('Image');
        done();
      });
  });

  describe('routes that need an image in the database', function() {
    beforeEach(function(done) {
      var testImage = new Image({imageUrl: 'test'});
      testImage.save(function(err, data) {
        if (err) throw err;
        this.testImage = data;
        done();
      }.bind(this));
    });

		it('should be able to update an image', function(done) {
		  chai.request(url)
		    .put('/images/' + this.testImage._id)
		    .send({imageUrl: 'new Url'})
		    .end(function(err, res) {
		      expect(err).to.eql(null);
		      expect(res.body.msg).to.eql('success');
		      done();
		    });
		});

		it('should be able to delete an image', function(done) {
		  chai.request(url)
		    .delete('/images/' + this.testImage._id)
		    .end(function(err, res) {
		      expect(err).to.eql(null);
		      expect(res.body.msg).to.eql('success');
		      done();
		    });
		});
  });
});