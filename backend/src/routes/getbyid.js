const express = require("express") ;
const Note = require("../models/Note")

const router =express.Router()

router.get("/:id" , async(req,res)=>
{
  try {
    const {id} = req.params
    const note = await Note.findById(id)
    res.status(201).json(note) ;
  } catch (error) {
    res.status(500).json("error")
  }
})


module.exports = router