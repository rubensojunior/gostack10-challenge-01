const express = require('express') 

const server = express() 

server.use(express.json())

const projects = []

let countReqs = 0
const countRequests = (req, res, next) => {
    countReqs++

    const countReqsMessage = countReqs === 1 
        ? `${countReqs} requisição feita`
        : `${countReqs} requisições feitas`

    console.log(countReqsMessage)

    return next()
}

server.use(countRequests)

const checkProjectExists = (req, res, next) => {
    const { id } = req.params

    const project = projects.find(p => p.id === id)

    if(!project){
        return res.status(400).json({error: 'Projeto não encontrado!'})
    }

    return next()
}

server.get('/projects', (req, res) => {
    return res.json(projects)
})

server.post('/projects', (req, res) => {
    const { id, title } = req.body

    const project = {
        id,
        title,
        tasks: []
    }

    projects.push(project)

    return res.json(projects)
})

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
    const { id } = req.params
    const { title } = req.body

    const project = projects.find(p => p.id === id)

    project.tasks.push(title)

    return res.json(projects)
})

server.put('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params
    const { title } = req.body

    const project = projects.find(p => p.id === id)

    project.title = title

    return res.json(projects)
})

server.delete('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params

    const projectIndex = projects.findIndex(p => p.id === id)

    projects.splice(projectIndex, 1)

    return res.send()
})

server.listen(3000)