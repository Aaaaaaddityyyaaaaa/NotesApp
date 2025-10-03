const express = require("express");
const {mongoose } = require("mongoose");
const Note = require("../models/Note");
const router = express.Router() ; 
router.put("/:id" , async (req,res)=>{
  try {
    const {content} = req.body ;
    const {id} = req.params ; 
    await Note.findByIdAndUpdate(id,{ $set: { content: content } })
    res.status(201).json("updated") ; 
  } 
  catch (error) {
    res.status(500).json("error")
  }
})
module.exports = router ; 