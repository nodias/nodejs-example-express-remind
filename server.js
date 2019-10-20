const express = require('express');
const app = express();
const session = require('express-session');
const fs = require('fs')

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded());

// Session middleware
app.use(session({
    secret: 'mysecret', //쿠키 변조 방지용
    resave: false, //세션을 언제나 저장할 지 정하는 값
    saveUninitialized: true // 새로 생겼지만 변경되지 않은 세션
}));

let router = require('./router/routes')(app, fs);