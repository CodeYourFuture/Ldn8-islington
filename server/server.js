const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const harrow = require('../data/Harrow.json')
const heathrow = require('../data/Heathrow.json')
const stratford = require('../data/Stratford.json')

const allAreas = { harrow, heathrow, stratford }
const allArea = [ harrow, heathrow, stratford ]
const areas = [ 'Harrow' ,  'Heathrow' ,  'Stratford' ]

app.get('/api/pharmacies', (req, res) => {
  
  let list = []
  allArea.map( area => {
     area.pharmacies.map(el=> list.push(el))
    })
  
  res.json(
     list
    // harrow.pharmacies.concat(heathrow.pharmacies).concat(stratford.pharmacies)
  )
})

app.get('/api/colleges', (req, res) => {
  let list = []
  allArea.map( area => {
     area.colleges.map(el=> list.push(el))
  })
  
  res.json(list)
})

app.get('/api/doctors', (req, res) => {
  res.json(harrow.doctors.concat(heathrow.doctors).concat(stratford.doctors))
})

app.get('/api/hospitals', (req, res) => {
  res.json(
    harrow.hospitals.concat(heathrow.hospitals).concat(stratford.hospitals)
  )
})

app.get('/api/areas', (req, res) => {
  res.send(areas)
})

app.get('/api/:area', (req, res) => {
  const area = req.params.area
  res.send(allAreas[area]);
})

app.get('/api/:area/info', (req, res) => {
  const area = req.params.area
  res.send(Object.keys(allAreas[area]));
})

app.get('/api/:area/pharmacies', (req, res) => {
  const area = req.params.area
  res.send(allAreas[area].pharmacies);
})

app.get('/api/:area/colleges', (req, res) => {
  const area = req.params.area
  res.send(allAreas[area].colleges);
})

app.get('/api/:area/doctors', (req, res) => {
  const area = req.params.area
  res.send(allAreas[area].doctors);
})

app.get('/api/:area/hospitals', (req, res) => {
  const area = req.params.area
  res.send(allAreas[area].hospitals);
})


app.get('/', (req, res) => {
  res.send(`<div style="font-size:28px; line-height: 1.6"><h2>London Mini Guide API!</h2> You can use:
            <ul> 
              <li><strong>/api/area</strong> to get all area guide e.g: /api/harrow</li>
              <li><strong>/api/area/pharmacies</strong> to get pharmacies data of selected area</li>
              <li><strong>/api/area/colleges</strong> to get colleges data of selected area</li>
              <li><strong>/api/area/doctors</strong> to get doctors data of selected area</li>
              <li><strong>/api/area/hospitals</strong> to get hospitals data of selected area</li>
              <li><strong>/api/pharmacies</strong> to get pharmacies data of London</li>
              <li><strong>/api/colleges</strong> to get colleges data of London</li>
              <li><strong>/api/doctors</strong> to get doctors data of London</li>
              <li><strong>/api/hospitals</strong> to get all hospitals data of London</li>
            </ul></div>`)
})

app.get('/*', (req, res) => {
  res.redirect('/')
})

const port = process.env.port || 5000
app.listen(port, () => {
  console.log(`App listening on port: ${port}`)
})
