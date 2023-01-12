const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(express.json());

const corsOptions= {
    origin: '*', 
    credentials: true
}
app.use(cors(corsOptions))

app.listen(() => {
  console.log(`listening DEV server at http://localhost:3001`);
});

