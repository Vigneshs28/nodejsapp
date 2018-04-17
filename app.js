var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cons = require('consolidate'),
	dust = require('dustjs-helpers'),
	pg = require('pg'),
	app = express();

// var connect = "postgres://localhost:5432/nodejs";

const config = {
    user: 'postgres',
    database: 'nodejs',
    password: '123456',
    port: 5432
};

app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function( req, res){
	var pool = new pg.Pool(config)

	pool.connect(function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }
	  
	  //use the client for executing the query
	  client.query('SELECT * FROM customer', function(err, result) {
	    if(err) {
	      return console.error('error running query', err);
	    }
	    res.render('index', {customers: result.rows});
	    done();
	  });
	});
});

app.post('/add', function(req, res){
	var pool = new pg.Pool(config)

	pool.connect(function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }
	  
	  //use the client for executing the query
	  client.query("INSERT INTO customer(name, address, email, phone) VALUES($1, $2, $3, $4)", [req.body.name, req.body.address, req.body.email, req.body.phone]);
	  done();
	  res.redirect('/');
	});
});

app.delete('/delete/:id', function(req, res){
	var pool = new pg.Pool(config)

	pool.connect(function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }
	  
	  //use the client for executing the query
	  client.query("DELETE FROM customer WHERE id = $1", [req.params.id]);
	  done();
	  res.sendStatus(200);
	});


});

app.post('/edit', function(req, res){

	var pool = new pg.Pool(config)

	pool.connect(function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }
	  
	  //use the client for executing the query
	  client.query("UPDATE customer SET name=$1, address=$2, email=$3, phone=$4 WHERE id = $5", [req.body.name, req.body.address, req.body.email, req.body.phone, req.body.id]);
	  done();
	  res.redirect('/');
	});

});

app.listen(8000, function(){
	console.log('Server is running on 8000......');	
});
