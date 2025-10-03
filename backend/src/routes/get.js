const express = require("express")
const Note = require("../models/Note")
const router = express.Router() ; 
router.get("/" , async(req,res)=>{
  try{
    const notes =  await Note.find().sort({createdAt:-1})
    res.status(200).json(notes)
  }
  catch
  {
    console.error("Error in get")
    res.status(500).json("InternalServer Error") 
  }
})
module.exports = router ; 
