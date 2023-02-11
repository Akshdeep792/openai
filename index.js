const path = require('path')
const express = require("express")
require('dotenv').config()
const PORT = process.env.PORT || 8000
const app = express()

// enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')))


app.use('/openai', require('./routes/openaiRoutes'))
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
})