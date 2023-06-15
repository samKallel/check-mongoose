const express= require('express');
const app=express();
require("dotenv").config();
app.use(express.json());
const connectDB= require('./config/connectDB')
connectDB();
app.use('/api/contact',require('./routes/contact'));
const PORT = process.env.PORT
app.listen(PORT,(err)=>{
    err? console.log(err):
    console.log(`Le  serveur fonctionne sur le port:http://localhost:${PORT}`);
     
      
});      
