const express = require('express') 

const server = express() 

server.use(express.json())

const projects = []

server.get('/projects', (req, res) => {
    return res.json(projects)
})

server.post('/projects', (req,res) => {
    console.log(req.body)
    const { id } = req.body
    const { title } = req.body

    const project = {
        id,
        title,
        tasks: []
    }

    projects.push(project)

    return res.json(projects)
})

server.listen(3000)