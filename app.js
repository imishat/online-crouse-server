const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.Port || 5000;
app.use(cors())



// test server 
app.get('/', (req, res) => {
    res.send('api test ')
})
app.listen(port, () => {
    console.log(`explenapp ${port}`)
})