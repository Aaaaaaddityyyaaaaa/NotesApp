const express = require("express");
const Note = require("../models/Note");
const router = express.Router() ; 
router.delete("/:id" , async (req,res)=>{
  try {
    const {id} = req.params
    await Note.findByIdAndDelete(id)
    res.status(201).json("Deleted")
  } catch (error) {
    res.status(500).json("Error")
  }
  
})
module.exports = router ;    