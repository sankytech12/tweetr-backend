const express=require('express');
const bodyParser=require('body-parser');
const connectDB=require('./config/db');
const userRoutes=require('./routes/userRoutes');
const tweetRoutes=require('./routes/tweetRoutes');
require("dotenv").config();

const app=express();

connectDB();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', userRoutes);
app.use('/api/tweets', tweetRoutes);


const PORT = process.env.PORT || 5008;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));