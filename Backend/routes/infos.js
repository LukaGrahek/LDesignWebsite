// infos.js
// Allows for communication between website and RestAPI

const express = require('express');
const router = express.Router();
const Info = require('../models/Info');

// Gets all the info from the restAPI
router.get('/', async (req,res) => {
    try { // Attemps to get all the objects from rest API
        const allInfo = await Info.find();
        res.json(allInfo);

    }catch(err) { // If get unsuccessful, send error
        res.json({message: err});
    }
});

// Inputs new info to the restAPI
router.post('/', async (req,res) => {
    const info = new Info({ // Saves the inputted data to a new object
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    });
    try { // Atemps to upload object to the restAPI
        const savedInfo = await info.save();
        res.json(savedInfo);
    }catch(err){ // If uploading unsuccessful, send error
        res.json({message: err});
    }
});

// Gets specific info from the restAPI
router.get('/:postId', async (req,res) => {
    try { // Attemps to get a specific object based on the object's ID from rest API
        const info = await Info.findById(req.params.postId);
        res.json(info);
    }catch(err) { // If get request unsuccessful, send error
        res.json({message: err});
    }
});

// Deletes specific info from the restAPI
router.delete('/:postId', async (req,res) => {
    try { // Attemps to delete an object based on its ID from rest API
        const removedInfo = await Info.remove({_id: req.params.postId})
        res.json(removedInfo);
    }catch(err) { // If deletion unsuccessful, send error
        res.json({message: err});
    }
});

// Updates info on the restAPI
router.patch('/:postId', async (req,res) => {
    try{ // Attemps to update an object based on its ID
        const updatedInfo = await Info.findByIdAndUpdate(
            req.params.postId,
            req.body,
             {new: true}
             );
        res.json(updatedInfo)
    }catch(err) { // If updating unsuccessful, send error
        res.json({message: err});
    }
})
module.exports = router;