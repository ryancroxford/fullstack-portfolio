const mongoose = require('mongoose');
const {Schema} = mongoose;

const projectSchema = new Schema({
  name: String,
  description: String,
})

mongoose.model('projects',projectSchema);
