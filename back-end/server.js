import express from 'express'
const http = require('http');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./data/swagger.json');

const app = express()
const AppPort = process.env.PORT || 8000
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({limit: "50mb"}))
app.use(cors())
app.set("PORT", AppPort)

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

//BD connection
require('./config/db');

const env = process.env.NODE_ENV

if(env === 'production'){
	app.use('/', express.static(`${__dirname}/birras-app/build`))
	// HTTP errorHandler
	app.use(errorHandler())
}

//Log errors in development
if (process.env.NODE_ENV === 'development') {
	// HTTP errorHandler
	app.use(errorHandler())
  }

const routes = require('./routes/api')(app);

 http.createServer(app).listen(AppPort, function () {
	console.log(`**** Api listening On ${AppPort} ****`);
	console.log(`* Api Running On ${process.env.NODE_ENV} *`);
	//Routes information
	console.log(`Registered Routes:`)
	app._router.stack.forEach(function (r) {
		if (r.route && r.route.path) {
			console.log(`URI: ` + r.route.path + ` - Method:` + JSON.stringify(r.route.methods))
		}
	})

	//Models Information
	const models = mongoose.modelNames()
	console.log(`Registered Models:`)
	models.forEach(function (m) {
		console.log(JSON.stringify(m))
	})
  
})