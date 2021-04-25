const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000

app.use(cors())

const preset = "This is a test preset"

app.get('/', (req, res) => {
	res.send('Server is running')
})

app.get('/presets', (req, res) => {
	res.json({ myPreset: preset });
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))