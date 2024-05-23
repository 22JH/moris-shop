import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
  postCode: {
    type: String,
  },
  address: {
    type: String,
  },
  addressDetail: {
    type: String,
  },
  wishList: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Item",
  },
  orderInProgress: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Item",
  },
  orderComplete: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "TotalOrders",
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
