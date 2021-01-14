'use strict';

const express = require('express');
const Place = require('../models/place');
const place = new Place();

const router = express.Router();

//RESTful routes

router.get('/poke', getPoke);
router.get('/poke/:id', getOnePoke);
router.post('/poke', createPoke);
router.put('/poke/:id', updatePoke);
router.delete('/poke/:id', deletePoke);

//RESTful route handlers

function getPoke(req, res) {
    const allPoke = place.get();
    res.status(200).json(allPoke);
}

function getOnePoke(req, res) {
    const id = req.params.id;
    const onePoke = place.get(id);
    res.status(200).json(onePoke);
}

function createPoke(req, res) {
    console.log(req.body.name);
    const obj = req.body;
    const newPoke = place.create(obj);
    res.status(200).json(newPoke);
}

function updatePoke(req, res) {
    const updateId = req.params.id;
    const updatedPoke = place.update(updateId, req.body);
    res.status(200).json(updatedPoke);
}

function deletePoke(req, res) {
    const deleteId = req.params.id;
    const deletePoke = place.delete(deleteId);
    res.status(200).send('deleting place');
}

module.exports = router;