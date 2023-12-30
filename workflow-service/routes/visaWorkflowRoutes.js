const express = require("express");
const router = express.Router();
const visaWorkflowController = require("../controllers/visaWorkflowController");

// Create a new Visa Workflow
router.post("/visa-workflows", visaWorkflowController.createVisaWorkflow);

// Get all Visa Workflows
router.get("/visa-workflows", visaWorkflowController.getAllVisaWorkflows);

module.exports = router;
