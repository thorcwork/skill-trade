<<<<<<< HEAD
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const mongoose = require('mongoose')
const routes = require("./routes")
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express()
const PORT = 8080;
=======
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const dbConnection = require('./database') ;
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const app = express();
const PORT = process.env.PORT || 8080;
>>>>>>> master
// Route requires
const user = require('./routes/user');
// const listings = require('./routes/Listing');
// const profiles = require('./routes/Profile');
// const reviews = require('./routes/Review');

// MIDDLEWARE
app.use(morgan('dev'));
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser


// Routes
<<<<<<< HEAD
app.use('/user', user)
//app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

=======
app.use('/user', user);
>>>>>>> master

// app.use('/listings', listings);

// app.use('/profiles', profiles);

// app.use('/reviews', reviews);

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
});


