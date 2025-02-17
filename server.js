const express = require('express');

const db = require('./data/db-config.js');

const server = express();

server.use(express.json());

// routes go here:

server.get('/inventory', (req, res) => {
  db('cars')
    .then(inventory => {
      res.status(200).json(inventory);
    })
    .catch(err => res.status(500).json(err));
});

server.post('/inventory', (req, res) => {
  const car = req.body;
  
  const { make, model, VIN, mileage } = car;
  if (!make || !model || !VIN || !mileage) {
    res.status(404).json({ error: "please specify required fields" });
    return;
  }

  db('cars').insert(car)
    .then(inventory => {
      res.status(200).json(inventory);
    })
    .catch(err => res.status(500).json(err));
});

server.get('/inventory/:id', (req, res) => {
  const { id } = req.params;

  db('cars').where({id}).first()
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = server;