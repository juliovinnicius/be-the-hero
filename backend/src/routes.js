const express = require('express');

const ongController = require('./controllers/ong_controller');
const incidentsController = require('./controllers/incident_controller');
const profileController = require('./controllers/profile_controller');
const sessionController = require('./controllers/session_controller');

const routes = express.Router();

//Login Ong
routes.post('/sessions', sessionController.create);

//Ongs
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

//Incidents
routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

//Profile Incidents
routes.get('/profile', profileController.index);

module.exports = routes;