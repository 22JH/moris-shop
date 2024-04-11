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
  /**
   *  장바구니 : {
   *    item : 아이템 정보,
   *    isOrderPending : 주문 진행사항까지 갔는지
   *  }
   */
  wishList: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Item",
  },
  orderInProgress: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Item",
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
