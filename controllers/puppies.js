import { Puppy } from "../models/puppy.js"

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Puppy.create(req.body)
  .then(puppy => {
    res.json(puppy)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function show(req, res) {
  Puppy.findById(req.params.id)
  .then(puppy => {
    res.json(puppy)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function index(req, res) {
  Puppy.find({})
  .then(puppies => {
    res.json(puppies)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function deletePuppy(req, res) {
  Puppy.findByIdAndDelete(req.params.id)
  .then(deletedPuppy => {
    res.json(deletedPuppy)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function updatePuppy(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updatedPuppy => {
    res.json(updatedPuppy)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}


export {
  create,
  show,
  index,
  deletePuppy as delete,
  updatePuppy as update
}