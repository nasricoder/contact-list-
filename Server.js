const express = require('express')
const ConnectDb = require('./Config/ConnectDb')
const ContactRouter = require('./Routes/Contact')
const app = express()
const port = 5000


ConnectDb()
app.use(express.json())
app.use('/api/Contact',ContactRouter)



app.listen(port,console.log(`server is runing at ${port}`))