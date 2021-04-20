const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {})
app.listen(PORT, () => {console.log(`Server is Running...`)})