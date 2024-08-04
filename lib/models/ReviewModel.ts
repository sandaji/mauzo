// lib/models/ReviewModel.ts
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically manage `createdAt` and `updatedAt` fields
  }
);

const ReviewModel =
  mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default ReviewModel;

export type Review = {
  user: mongoose.Schema.Types.ObjectId;
  product: mongoose.Schema.Types.ObjectId;
  rating: number;
  review: string;
  createdAt: Date;
  updatedAt: Date;
};
