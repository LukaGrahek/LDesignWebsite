const express = require('express');
const router = express.Router();
const Info = require('../models/Info');

//GET BACK ALL INFO
router.get('/', async (req,res) => {
    try {
        const allInfo = await Info.find();
        res.json(allInfo);

    }catch(err) {
        res.json({message: err});
    }
});

//SUBMITS INFO
router.post('/', async (req,res) => {
    const info = new Info({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    });
    try {
        const savedInfo = await info.save();
        res.json(savedInfo);
    }catch(err){
        res.json({message: err});
    }
});

//GET SPECIFIC INFO
router.get('/:postId', async (req,res) => {
    try {
        const info = await Info.findById(req.params.postId);
        res.json(info);
    }catch(err) {
        res.json({message: err});
    }
});

//DELETE INFO
router.delete('/:postId', async (req,res) => {
    try {
        const removedInfo = await Info.remove({_id: req.params.postId})
        res.json(removedInfo);
    }catch(err) {
        res.json({message: err});
    }
});

//UPDATE INFO
router.patch('/:postId', async (req,res) => {
    try{
        const updatedInfo = await Info.updateOne(
            {_id: req.params.postId},
             {$set: {title: req.body.title}}
             );
        res.json(updatedInfo)
    }catch(err) {
        res.json({message: err});
    }
})
module.exports = router;