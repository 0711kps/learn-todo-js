const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const bp = require('body-parser')
let data = []

const syncToDB = () => {
    fs.writeFile('database.json', JSON.stringify(data), err => {
	if (err) throw err
    })
}

const initServer = () => {
    if (fs.existsSync('database.json')) {
	fs.readFile('database.json', (_err, loadedData) => {
	    data = JSON.parse(loadedData)
	    console.log(`${new Date}資料庫已讀取`)
	})
    } else {
	syncToDB()
    }
}

initServer()

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
})

app.use(bp.json())

app.get('/todos', (req, res) => {
    res.send(JSON.stringify({ data: data, msg: 'todos query completed!'}))
})

app.post('/todos', (req, res) => {
    let newRow = {
                   id: data.length === 0 ? 1 : data[data.length - 1].id + 1,
                   title: req.body.title,
                   done: false
                 }
    data.push(newRow)
    syncToDB()
    res.send(JSON.stringify({ data: newRow, msg: 'todo created!'}))
})

app.patch('/todos/:id', (req, res) => {
    let targetRow = data.find(row => row.id == req.params.id)
    targetRow.done = true
    syncToDB()
    res.send(JSON.stringify({ data: targetRow, msg: 'target todo status changed!' }))
})

app.delete('/todos/:id', (req, res) => {
    let targetIndex = data.findIndex(row => row.id == req.params.id), msg
    if (targetIndex >= 0) {
      data.splice(targetIndex, 1)
      syncToDB()
      msg = 'todo deleted'
    } else {
      msg = 'todo not found'
    }
    res.send(JSON.stringify({ data: req.params.id, msg: msg }))
})

app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}\n`)
})
