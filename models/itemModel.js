import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: [true, "Please enter item name"],
    trim: true,
  },
  quantity: {
    type: Number,
    required: [true, "Please enter item quantity"],
  },
  isPacked: {
    type: Boolean,
    default: false,
  },
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
