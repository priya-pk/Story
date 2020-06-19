const express = require('express');
const app =  express();
const nav = [
    {link:'/index',name:'HOME'},
   {link:'/books',name:'BOOKS'},
   {link:'/add',name:'ADD BOOKS'},
   {link:'/authors',name:'AUTHORS'},
   {link:'/',name:'SIGN IN'},
   {link:'/signup',name:'SIGN UP'}
];
const navs = [
    {link:'/index',name:'HOME'},
   {link:'/',name:'SIGN IN'},
   {link:'/signup',name:'SIGN UP'}
];
const booksRouter = require("./src/routes/bookRoutes")(nav)
const authorsRouter = require("./src/routes/authorRoutes")(nav)
const homeRouter = require("./src/routes/homeRoutes")(nav)
const signupsRouter = require("./src/routes/signupRoutes")(navs)
const addsRouter = require("./src/routes/addRoutes")(nav)

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/index',homeRouter);
app.use('/signup',signupsRouter);
app.use('/add',addsRouter);



app.get('/',function(req,res){
    res.render("signin",
    {navs,
    title:'Library'
    });
});

app.post('/',function(req,res){
    res.redirect('/index');
});
app.post('/signup',function(req,res){
    res.redirect('/');
});
app.post('/add',function(req,res){
    res.redirect('/books');
});



app.listen(3000);