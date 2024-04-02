import mongoose, { ObjectId } from "mongoose";

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
  address: {
    type: String,
  },
  wishList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
