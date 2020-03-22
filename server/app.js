const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require('dotenv').config()

const auth  = require('./routes/auth');
const color  = require('./routes/color');
const composition  = require('./routes/composition');
const item  = require('./routes/item');
const items  = require('./routes/items');
const style  = require('./routes/style');
const type  = require('./routes/type');
const user  = require('./routes/user');
const users  = require('./routes/users');


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors());



// ROUTES
app.use('/auth', auth)
app.use('/color', color)
app.use('/composition', composition)
app.use('/item', item)
app.use('/items', items)
app.use('/style', style)
app.use('/type', type)
app.use('/user', user)
app.use('/users', users)





// start the server in the port 3000 !
app.listen(process.env.PORT_NODE, function () {
    console.log('Example aps listening on port 8000.');
});