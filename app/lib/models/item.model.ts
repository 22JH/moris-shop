import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  thumbnail: {
    type: [String],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  soldOut: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    default: Date.now(),
  },
});

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);
export default Item;
