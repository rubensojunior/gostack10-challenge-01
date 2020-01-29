const express = require('express') 

const server = express() 

server.use(express.json())

const projects = []

server.get('/projects', (req, res) => {
    return res.json(projects)
})

server.post('/projects', (req, res) => {
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

server.put('/projects/:id', (req, res) => {
    const { id } = req.params
    const { title } = req.body

    projects.forEach((p, index) => {
        if(p.id === id){
            projects[index].title = title  
        }
    })

    return res.json(projects)
})

server.listen(3000)