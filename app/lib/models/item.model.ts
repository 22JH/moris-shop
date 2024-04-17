import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  thumbnails: {
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
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  contents: {
    type: String,
    required: true,
  },
  soldOut: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);
export default Item;
