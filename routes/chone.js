const express = require('express');
const Chone = require('../models/Chone'); // Import the Chone model
const router = express.Router();

// Create a new Chone
router.post('/', async (req, res) => {
  const { name, ingredients, price } = req.body;
  const newChone = new Chone({ name, ingredients, price });
  try {
    const savedChone = await newChone.save();
    res.status.json(savedChone);
  } catch (err) {
    res.status.json({ message: err.message });
  }
});

// Get all Chones
router.get('/', async (req, res) => {
  try {
    const chones = await Chone.find();
    res.json(chones);
  } catch (err) {
    res.status.json({ message: err.message });
  }
});

// Update a Chone
router.put('/:id', async (req, res) => {
  try {
    const updatedChone = await Chone.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedChone);
  } catch (err) {
    res.status.json({ message: err.message });
  }
});

// Delete a Chone
router.delete('/:id', async (req, res) => {
  try {
    await Chone.findByIdAndDelete(req.params.id);
    res.json({ message: 'Chone deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
