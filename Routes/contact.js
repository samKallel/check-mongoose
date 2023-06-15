//le routeur de la collection contact avec les diffferntes methodes et routes
const express = require ('express');
const Contact = require('../models/Contact');


const router = express.Router();
//test 
router.get('/test',(req,res)=>{
    res.send("Hello world, I'm here!!!");
});
//Add
router.post("/add", async (req,res)=>{
    try {
        const {name, email, phone} = req.body;
        const newContact = new Contact({name, email, phone});
        await newContact.save();
        res.status(200).send({ message:"Contact added successuflly", newContact});
    } catch (error) {
        res.status(400).send({message:"Can't added contact!!",error})
    }
});
//get All
router.get('/all', async (req,res)=>{
    try {
        const listContact= await Contact.find();
        res.status(200)
        .send({msg: "I get all Contact !!", listContact});            
    } catch (error) {
        res.status(400).send({msg:"Can't get, sorry!!!"});        
    }
});
//get one 
router.get('/:id', async (req,res)=>{
    try {
       const contactToGet = await Contact.findOne({_id: req.params.id});
       res.status(200).send({msg:"I get The contact...", contactToGet});
    } catch (error) {
        res.status(400).send({msg:"Can't get with this id !", error});    
    }
});
// delete contact
router.delete('/:_id', async (req,res)=>{
    try {
       const { _id } = req.params;
       await Contact.findOneAndDelete({ _id });
       res.status(200).send({msg:"Contact deleted"});
    } catch (error) {
        res.status(400).send({msg:"Can't delete contact with this id !", error});    
    }
});
// edit contact
router.put('/:_id', async (req,res)=>{
    try {
       const { _id } = req.params;
       const result= await Contact.updateOne({ _id },{$set:{...req.body}});
       res.status(200).send({msg:"Contact updateded"});
    } catch (error) {
        res.status(400).send({msg:"Can't update contact with this id !", error});    
    }
});

//export
module.exports = router;