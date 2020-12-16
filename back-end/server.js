import express from 'express'

const cors = require('cors')
const app = express()

app.use(cors())
app.set("PORT", process.env.PORT || 8000)

const env = process.env.NODE_ENV

if(env === 'production'){
	app.use('/', express.static(`${__dirname}/birras-app/build`))
}

app.get("/api", (req, res) => {
	res.send("Welcome to our api.")
})

app.listen(app.get("PORT"), ()=>{
	console.log(`API running at: localhost:${app.get("PORT")}`)
	console.log(`NODE_ENV: ${env}`)
}) 