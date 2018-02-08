var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://127.0.0.1:1337/' , function(error, response, body) {
        expect(body).to.equal('Hello World');
        done();
    });
});
