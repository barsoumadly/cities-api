import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  cityName: {
    type: String,
    required: [true, "Please enter city name"],
    trim: true,
  },
  country: {
    type: String,
    required: [true, "Please enter country"],
    trim: true,
  },
  emoji: {
    type: String,
  },
  date: {
    type: Date,
  },
  notes: {
    type: String,
  },
  position: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

const City = mongoose.model("City", citySchema);
export default City;
