const express = require('express')
const studentRoutes = require('./src/student/routes')

const app = express()
const port = 3001

app.get("/", (req, res) => {
    res.send("hello world")
})

app.use('api/v1/students', studentRoutes)

app.listen(port, () => console.log(`app está na porta ${port}`))