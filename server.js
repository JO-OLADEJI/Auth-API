const express = require('express');
const connectDB = require('./models/connectDb.js');
const app = express();


app.use(express.json());
connectDB();


// routes
app.get('/', (req, res) => res.send('Welcome back, please login or signup.'));
app.use('/api/user/register', require('./routes/register.js'));
app.use('/api/user/login', require('./routes/login.js'));
app.use('/api/user/profile', require('./routes/userProfile.js'));

app.get('*', (req, res) => res.status(404).send('404: Page not found !'));
app.post('*', (req, res) => res.status(404).send('404: Page not found !'));



const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));