const express = require('express');
const app = express();
const router = require('./router/routes')(app);

app.set('views', __dirname + '/api/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));

app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});