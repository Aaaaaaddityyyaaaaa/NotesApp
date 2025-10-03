const express = require("express")
const router = express.Router() ; 
const Note  = require("../models/Note")
router
router.post("/" , async (req,res)=>{
  try {
    const {title , content} = req.body ; 
    console.log(title)
    console.log(content) 
    const NewNote = new Note({title:title , content:content})
    await NewNote.save()
    res.status(201).json("posted")
  } catch (error) {
    res.status(500).json("Error posting")
  }

})
module.exports = router ; 