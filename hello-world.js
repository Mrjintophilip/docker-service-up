const express = require('express')
const app = express()
const os = require("os");

app.get('/', (req, res) => res.send(os.hostname()+' \n Hello World! Service on PORT 8080 \n'))
app.listen(8080 , () => console.log('App Listening on PORT 8080'))

