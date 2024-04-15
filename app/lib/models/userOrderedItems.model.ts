import mongoose from "mongoose";

const userOrderedItemsSchema = new mongoose.Schema({
  items: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Item",
  },
});

const UserOrderedItems =
  mongoose.models.UserOrderedItems ||
  mongoose.model("UserOrderedItems", userOrderedItemsSchema);
export default UserOrderedItems;
