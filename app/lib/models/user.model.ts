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
  address: {
    type: String,
  },
  wishList: {
    type: [String],
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
