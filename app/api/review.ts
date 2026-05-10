import { auth } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import ReviewModel from "@/lib/models/ReviewModel";
import OrderModel from "@/lib/models/OrderModel";

export const POST = auth(async (req: any) => {
  if (!req.auth) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();
    const { product, rating, review } = await req.json();
    const userId = req.auth.user._id;

    // Check if user has purchased the product
    const hasPurchased = await OrderModel.findOne({
      user: userId,
      "items.product": product,
      isPaid: true,
    });

    if (!hasPurchased) {
      return Response.json(
        {
          message: "You need to purchase the product before leaving a review.",
        },
        { status: 400 },
      );
    }

    const newReview = new ReviewModel({
      user: userId,
      product,
      rating,
      review,
    });

    await newReview.save();
    return Response.json(
      { message: "Review submitted successfully", review: newReview },
      { status: 201 },
    );
  } catch (err: any) {
    return Response.json(
      { message: err.message || "Internal Server Error" },
      { status: 500 },
    );
  }
}) as any;
