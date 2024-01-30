import mongoose from "mongoose";

const CategoryServiceSchema = mongoose.Schema(
  {
    nameCategoryService: {
      type: String,
      required: true,
    },
    description: {
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

const CategoryServiceModel = mongoose.model("CategoryService", CategoryServiceSchema);
export default CategoryServiceModel;
