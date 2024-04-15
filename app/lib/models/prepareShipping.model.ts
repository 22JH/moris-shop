import mongoose from "mongoose";

const prepareShippingSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
  },
});

const PrepareShipping =
  mongoose.models.PrepareShipping ||
  mongoose.model("PrepareShipping", prepareShippingSchema);
export default PrepareShipping;
