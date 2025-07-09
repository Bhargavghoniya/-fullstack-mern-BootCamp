const { render } = require("ejs");
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true })); 

let todoList1 = ['red','green','yellow'];
let todoList = [];

app.get('/', (req, res) => {
    let number = Math.floor(Math.random()*10);



    res.render('todo', { todoList,number,todoList1 });
});

app.post('/add', (req, res) => {
    const task = req.body.task;
    if (task) {
        todoList.push(task);
    }
    res.redirect('/');
});

app.post('/clear', (req, res) => {
    todoList = [];
    res.redirect('/');
});

app.listen(8080, () => {
    console.log("Server is connected to port 8080");
});
