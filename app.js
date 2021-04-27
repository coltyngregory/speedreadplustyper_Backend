const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000

// https://www.npmjs.com/package/uuid

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const preset = [
	{
		title: "Lord Of The Flies",
		content: "This is a book about the human condition",
	},
	{
		title: "Harry Potter",
		content: "Harry Potter goes to Hogwarts",
	},
]

const myPreset = []

app.get('/', (req, res) => {
	res.send('Server is running')
})

app.get('/presets', (req, res) => {
	res.json({ default: preset, custom: myPreset });
})

app.post('/addPreset', (req, res) => {
	console.log('hitting')
	console.log(myPreset)
	myPreset.push({ title: req.body.title, content: req.body.content })
	console.log(myPreset)
	res.json(myPreset)
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))