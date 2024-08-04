import { getServerSession } from "next-auth/next"; // Correct import for NextAuth v5
import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/lib/models/ProductModel";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "@/lib/auth"; // Ensure this is the correct import for your NextAuth configuration

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get the session
  const session = await getServerSession(req, res, authOptions);

  // Check if the user is authenticated and is an admin
  if (!session || !session.user || !session.user.isAdmin) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Connect to the database
  try {
    await dbConnect();
  } catch (error) {
    return res.status(500).json({ message: "Database connection failed" });
  }

  // Handle different request methods
  switch (req.method) {
    case "GET":
      try {
        const products = await ProductModel.find();
        return res.status(200).json(products);
      } catch (error) {
        return res.status(500).json({ message: "Failed to retrieve products" });
      }

    case "POST":
      try {
        const {
          name,
          slug,
          image,
          price,
          category,
          brand,
          countInStock,
          description,
          rating,
          numReviews,
        } = req.body;

        // Validate incoming data
        if (
          !name ||
          !slug ||
          !image ||
          !price ||
          !category ||
          !brand ||
          !countInStock ||
          !description ||
          !rating ||
          !numReviews
        ) {
          return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new product
        const product = new ProductModel({
          name,
          slug,
          image,
          price,
          category,
          brand,
          countInStock,
          description,
          rating,
          numReviews,
        });

        await product.save();
        return res
          .status(201)
          .json({ message: "Product created successfully", product });
      } catch (error) {
        return res.status(500).json({ message: "Failed to create product" });
      }

    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }
}
