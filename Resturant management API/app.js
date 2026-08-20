const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const connectDB = require('./config/database');
const apiRoutes = require('./routes/api.routes');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
