const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config()

const item  = require('./routes/item');
const items  = require('./routes/items');
const user  = require('./routes/user');
const users  = require('./routes/users');


const token  = require('./services/token');



app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// ROUTES
app.use('/user', user)
app.use('/users', users)
app.use('/item', item)
app.use('/items', items)




// start the server in the port 3000 !
app.listen(process.env.PORT_NODE, function () {
    console.log('Example aps listening on port 8000.');
});