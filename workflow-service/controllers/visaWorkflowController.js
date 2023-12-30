const VisaWorkflow = require("../models/VisaWorkflow");

// Create a new Visa Workflow
exports.createVisaWorkflow = async (req, res) => {
  try {
    const newVisaWorkflow = new VisaWorkflow(req.body);
    await newVisaWorkflow.save();
    res.status(201).json(newVisaWorkflow);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Visa Workflows
exports.getAllVisaWorkflows = async (req, res) => {
  try {
    const visaWorkflows = await VisaWorkflow.find().populate({
      path: "steps.stepId",
      model: "Step",
    });
    res.status(200).json(visaWorkflows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
