import mongoose from "mongoose";

const shippedSchema = new mongoose.Schema({
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

const Shipped =
  mongoose.models.PrepareShipping || mongoose.model("Shipped", shippedSchema);
export default Shipped;
