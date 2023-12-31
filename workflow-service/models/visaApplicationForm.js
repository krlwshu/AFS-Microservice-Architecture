const mongoose = require("mongoose");

const visaApplicationFormSchema = new mongoose.Schema({
  applicationSchema: {
    type: [mongoose.Schema.Types.Mixed], // Mixed type - then i'll store the schema in the
  },
  visaIssuer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "VisaIssuer",
  },
  visaType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "VisaType",
  },
});

const VisaApplicationForm = mongoose.model(
  "VisaApplicationForm",
  visaApplicationFormSchema
);

module.exports = VisaApplicationForm;
