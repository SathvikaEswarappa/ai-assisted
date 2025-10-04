const express = require('express');
const router = express.Router();
const { cleanupDiagram } = require('../controllers/cleanupController');
const { verifyToken } = require('../middleware/authMiddleware');
const Diagram = require('../models/diagramModel');

router.post('/cleanup', verifyToken, cleanupDiagram);

router.post('/save', verifyToken, async (req, res) => {
  const { name, data } = req.body;
  const diagram = new Diagram({ userId: req.user.sub, name, data });
  await diagram.save();
  res.json({ status: 'saved' });
});

module.exports = router;
