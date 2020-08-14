const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

ATLAS_KEY = process.env.ATLAS_API_KEY;
console.log(ATLAS_KEY);
const uri = `mongodb+srv://ryan-croxford:${ATLAS_KEY}@portfolio-app.j01q0.mongodb.net/portfolio_projects?retryWrites=true&w=majority`;
require('./models/Project');

const app = express();

console.log(process.env.PORT);

mongoose.Promise = global.Promise;
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch(err => console.log(err))


// mongoose.connection.on('error', err => {
//   logError(err);
// });

app.use(bodyParser.json());

require('./routes/projectRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
  console.log(`app running on port ${PORT}`)
});
