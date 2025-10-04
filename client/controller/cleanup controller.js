const { detectShapes } = require('../utils/shapeDetection');

exports.cleanupDiagram = (req, res) => {
  const { imageData } = req.body;
  const cleanedShapes = detectShapes(imageData);
  res.json({ shapes: cleanedShapes });
};
