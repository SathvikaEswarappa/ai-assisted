const mongoose = require('mongoose');

const diagramSchema = new mongoose.Schema({
  userId: String,
  name: String,
  data: Object
});

module.exports = mongoose.model('Diagram', diagramSchema);
