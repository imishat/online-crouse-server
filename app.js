const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;



const category = require('./data/cours.json')
const courses = require('./data/singleItem.json')
app.use(cors())
app.get('/catagory', (req, res) => {
        res.send(category)
    })
    // test server 
app.get('/', (req, res) => {
    res.send('api tests ')
})


app.get('/couress/:id', (req, res) => {
    const id = req.params.id
    const catagoryCouress = courses.filter(c => c.category_id === id)
    res.send(catagoryCouress)

})
app.get('/allCours', (req, res) => {

    res.send(courses)
})

app.get('/cours/:id', (req, res) => {
    const id = req.params.id
    const cours = courses.find(c => c._id === id)
    res.send(cours)
})
app.listen(port, () => {
    console.log(`explenapp ${port}`)
})