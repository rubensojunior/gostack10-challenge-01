const express = require('express') 

const server = express() 

server.use(express.json())

const projects = []
let countReqs = 0

server.use((req, res, next) => {
    console.log(++countReqs)

    return next()
})

const checkProjectExists = (req, res, next) => {
    const { id } = req.params

    const projectFiltered = projects.filter(p => p.id === id)

    if(projectFiltered.length === 0){
        return res.status(400).json({error: 'Projeto não encontrado!'})
    }

    return next()
}

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

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
    const { id } = req.params
    const { title } = req.body

    projects.forEach((p, index) => {
        if(p.id === id){
            projects[index].tasks.push(title) 
        }
    })

    return res.json(projects)
})

server.put('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params
    const { title } = req.body

    projects.forEach((p, index) => {
        if(p.id === id){
            projects[index].title = title  
        }
    })

    return res.json(projects)
})

server.delete('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params

    projects.forEach((p, index) => {
        if(p.id === id){
            projects.splice(index, 1) 
        }
    })

    return res.send()
})

server.listen(3000)