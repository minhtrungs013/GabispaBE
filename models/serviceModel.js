import mongoose from "mongoose";

const ServiceSchema = mongoose.Schema(
  {
    nameService: {
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
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    categoryServiceId: {
      type: String,
      required: true,
    },
    detailsService: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    }
  },
  { timestamps: true }
);

const ServiceModel = mongoose.model("Service", ServiceSchema);
export default ServiceModel;
