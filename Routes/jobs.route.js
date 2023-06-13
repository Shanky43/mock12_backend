const express = require("express");
const JobModel = require("../Model/jobs.model");
const JobsRouter = express.Router();

JobsRouter.post("/postjobs", async (req, res) => {
  try {
    const postjobs = JobModel(req.body);
    await postjobs.save();
    res.status(200).send("Successfully added Data");
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

JobsRouter.get("/", async (req, res) => {
  try {
    const { techstack } = req.query;
    let query = {};

    if (techstack) {
      query.language = { $regex: techstack, $options: "i" };
    }

    const viewjobs = await JobModel.find(query);
    res.status(200).send({ jobs: viewjobs });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

module.exports = {JobsRouter};
