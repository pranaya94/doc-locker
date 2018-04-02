require('./api/data/db.js')
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const routes = require('./api/routes')

app.set('port', 3000)

app.use(express.static(path.join(__dirname,'/../build')))

// app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/api',routes)

const server = app.listen(app.get('port'), function(){
	const port = server.address().port
	console.log("Listening on port " + port)	
})
