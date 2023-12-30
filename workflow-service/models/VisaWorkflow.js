const mongoose = require("mongoose");

const stepSchema = new mongoose.Schema({
  stepId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Step",
  },
  dependentOnPrevious: {
    type: Boolean,
    default: false,
  },
  expiry: String,
});

const visaWorkflowSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  steps: [stepSchema],
});

module.exports = mongoose.model("VisaWorkflow", visaWorkflowSchema);
