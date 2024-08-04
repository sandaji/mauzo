// pages/api/reviews.ts
import { getSession } from "next-auth/react";
import dbConnect from "@/lib/dbConnect";
import ReviewModel from "@/lib/models/ReviewModel";
import OrderModel from "@/lib/models/OrderModel";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session || !session.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  await dbConnect();

  if (req.method === "POST") {
    const { product, rating, review } = req.body;

    // Check if user has purchased the product
    const hasPurchased = await OrderModel.findOne({
      user: session.user.id,
      "items.product": product,
      isPaid: true,
    });

    if (!hasPurchased) {
      return res
        .status(400)
        .json({
          message: "You need to purchase the product before leaving a review.",
        });
    }

    const newReview = new ReviewModel({
      user: session.user.id,
      product,
      rating,
      review,
    });

    try {
      await newReview.save();
      return res
        .status(201)
        .json({ message: "Review submitted successfully", review: newReview });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
