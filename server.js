//le serveur
//importation et creation de linstance express
const express= require('express');
const app=express();

//importation du dotenv qui contient le lien de DB et le port
require("dotenv").config();

// midelware qui traduit les fichier json
app.use(express.json());

//connection a la DB grace au fichier connectDB
const connectDB= require('./config/connectDB')
connectDB();

//le routeur
app.use('/api/contact',require('./Routes/contact'));

// lancer le serveur dans le port indiqué
const PORT = process.env.PORT
app.listen(PORT,(err)=>{
    err? console.log(err):
    console.log(`Le  serveur fonctionne sur le port:http://localhost:${PORT}`);
     
      
});      
