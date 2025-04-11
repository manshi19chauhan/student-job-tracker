const express = require('express');
const Job = require('../models/job.model.js');
const router = express.Router();

router.get('/', async (req, res) => {
  const jobs = await Job.find().sort({ date: -1 });
  res.json(jobs);
});

router.post('/', async (req, res) => {
  const newJob = new Job(req.body);
  await newJob.save();
  res.status(201).json(newJob);
});

router.put('/:id', async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedJob);
});

router.delete('/:id', async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;