const express = require('express')
const Contact = require('../Models/Contact')


const ContactRouter = express.Router()


ContactRouter.post('/addContact',async(req,res)=>{
    try {
        const NewContact = new Contact(req.body)
        const Founded = await Contact.findOne({email: req.body.email})
        if(Founded){
           return res.status(400).send("email Already exist")
        }
       await NewContact.save()
        res.status(200).send({NewContact,Msg:'Contact Add'})
    } catch (error) {
        res.status(500).send('could not add contact')
    }
})
ContactRouter.get('/GetContact', async(req,res)=>{
    try {
        const Contacts = await Contact.find()
        res.status(200).send({Contacts,Msg:"List of contacts"})
    } catch (error) {
        res.status(500).send('could not get contact')
    }  
})
ContactRouter.delete('/DeleteContact/:id', async (req,res)=>{
    try {
        const {id} = req.params
        const DeleteContact = await Contact.findByIdAndDelete(id)
        res.status(200).send('contact delete')
    } catch (error) {
        res.status(500).send('could not delete')
    }
})
ContactRouter.put('/Updatecontact/:id', async(req,res)=>{
    try {
        const {id} = req.params
        const Updatecontact = await Contact.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({UpContact, Msg : 'contact Update'})
    } catch (error) {
        res.status(500).send('could not update')
    }
})
module.exports = ContactRouter