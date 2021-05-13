const express = require('express')
const app = express()
const people = require('./routers/people')
const login = require('./routers/login')

// static assets
app.use(express.static('./methods-public'));
// Parse form data
app.use(express.urlencoded({extended: false}))
// Parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', login)


app.listen(5000, ()=>{
    console.log('Server port listening on 5000....')
})