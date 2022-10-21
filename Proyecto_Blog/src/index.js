const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path');
const session = require('express-session');
const { v4: uuidv4 } = require('uuid')
const { connectToServer } = require('./conf/mongo.config');
const Article = require('../models/article')
const routeIndex = require('./routers/login/index');
const routeLogin = require('./routers/login/login');
const routeLogout = require('./routers/login/logout');
const routeRegister = require('./routers/login/register');
const routeAdmin = require('./routers/login/admin');
const routeAdminHome = require('./routers/login/adminHome');


const app = express ()
const port = process.env.PORT || 3000
// ROUTES

app.use('/public', express.static('public'))
app.use('/', routeIndex);
app.use('/login', routeLogin);
app.use('/logout', routeLogout)
app.use('/register', routeRegister);
app.use('/admin', routeAdmin);
app.use('/adminHome', routeAdminHome);




// RUTA PRINCIPAL HOME

app.get('/',(req, res)=>{

})

// MONGODB CONNECTION

mongoose   
    .connect(process.env.MONGODB_URI)
    
    .then(()=> console.log(`Conectado to MongoDB Atlas`))
    .catch((err)=> console.error(err))

app.listen(port,
    ()=> console.log(`Servidor escuchando en el puerto ${port}`)
    )

// SERVER START

connectToServer(err => { if (err) console.log(err); else console.log("server start") });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    if (!req.user) {
        res.header('cache-control', 'private,no-cache,no-store,must revalidate')
        res.header('Express', '-1')
        res.header('paragrm', 'no-cache')

    }
    next();
})

// SESSION

app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}));
