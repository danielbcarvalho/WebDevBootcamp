const express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    User = require('./models/user'),
    localStrategy = require('passport-local'),
    passportLocalMoongoose = require('passport-local-mongoose')

mongoose.connect('mongodb://localhost:27017/auth_demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message))

const app = express()
app.set('view engine', 'ejs')
//set body-parser to get url 'body', used to req POST from forms
// -> req.body.usarname, req.body.passport ... 
app.use(bodyParser.urlencoded({ extended: true }))

//need this everytime using passport
app.use(require('express-session')({
    secret: "Mel is the best cat in the world",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//===================
// Routes

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/secret', isLoggedIn, (req, res) => res.render("secret"))

//===============
//Auth Routes
//===============

//SIGN UP Routes
//show sign up form
app.get('/register', (req, res) => {
    res.render("register")
})

//handling user sign up
app.post("/register", (req, res) => {
    User.register(new User({username: req.body.username}), req.body.password)
    .then(user => passport.authenticate("local")(req, res, () => res.redirect("/secret")))
    .catch(err => {
        console.log(err);
        return res.render('register')
    }) 
})

//LOGIN Routes
//render login form
app.get('/login', (req, res) => res.render('login'))
//logic
//middleware -> code that runs before the callback
app.post('/login', passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), (req, res) => {
    
})

//LOPGOUT route
app.get("/logout", (req, res) => {
    req.logOut()
    res.redirect('/')
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
}

app.listen('8080', () => console.log("The Server Has Started..."))