import mongoose from "mongoose";

const prepareShippingSchema = new mongoose.Schema({
  item: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  postCode: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  addressDetail: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  trackingNumber: {
    type: String,
  },
  orderedDate: {
    type: Date,
    default: Date.now,
  },
});

const PrepareShipping =
  mongoose.models.PrepareShipping ||
  mongoose.model("PrepareShipping", prepareShippingSchema);
export default PrepareShipping;
