//c'est le fichier de connexion avec la DataBase

const mongoose = require('mongoose');
const connectDB = async()=>{
    try{
         //connect avecla DB distante son lien se trouve dans le .env
        await mongoose.connect(process.env.DB_URI);
        console.log("Database connected...");
    }  
    //dans le cas ou ya un probleme de connexion
    catch (error){
        console.log('Can not connected!!!', error)
        
    }       
    };
//exportation
module.exports = connectDB;
