const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();


app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://pablosilva:Gavioes12@cluster0-d33fs.mongodb.net/test?retryWrites=true&w=majority'


mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex:true});

const connection  = mongoose.connection;
connection.once('open', () => {
  console.log('✅ MongoDB connection established successfully')
});

const exerciseRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);


const PORT = 8081
app.listen(PORT,() => {
  console.log("🚀 Back-End started")
})