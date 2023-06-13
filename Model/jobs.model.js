const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
    {
        company: { type: String },
        postedAt: { type: String },
        city: { type: String },
        location: { type: String },
        role: { type: String },
        level: { type: String },
        contract: { type: String },
        position: { type: String },
        language: { type: String },

    },
    {
        versionKey: false,
    }
);
const JobModel = mongoose.model("jobs", jobSchema);

module.exports = JobModel;
