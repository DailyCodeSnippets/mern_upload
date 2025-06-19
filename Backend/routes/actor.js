const express = require("express");
const router = express.Router();

const Actor = require("../models/actors");

//Get request Logic
router.get("/", async (req, res)=>{
    const actors = await Actor.find();
    res.json(actors);
})


//Post request Logic
router.post("/", async (req,res)=>{
    const newActor = new Actor({ name : req.body.name})
    const saved =  await newActor.save();
    res.status(201).json(saved);
})
//put
router.put('/:id',async(req,res)=>{
    const updated = await Actor.findByIdAndUpdate(

        req.params.id,
        {name:req.body.name},
        {new:true}
    )
    res.json(updated)
})

//Delete

router.delete('/:id', async(req,res)=>{
    const Deleted = await Actor.findByIdAndDelete(req.params.id);
    res.json(Deleted);
})

module.exports = router;