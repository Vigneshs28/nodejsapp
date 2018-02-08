var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://10.12.108.11:1337/' , function(error, response, body) {
        expect(body).to.equal('Hello World');
        done();
    });
});
