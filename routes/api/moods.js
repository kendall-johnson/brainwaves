const express = require('express');
const router = express.Router();
const moodsCtrl = require('../../controllers/api/moods');

// GET /api/moods
router.get('/', moodsCtrl.index);

// GET /api/moods/new
router.get('/new', moodsCtrl.newMood);

// POST /api/moods/:id
router.post('/:id', moodsCtrl.editMood);

// DELETE /api/moods/:id
router.delete('/:id', moodsCtrl.deleteMood);


module.exports = router;
