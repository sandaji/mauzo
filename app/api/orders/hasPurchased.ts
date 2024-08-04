// pages/api/orders/hasPurchased.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import orderService from "@/lib/services/orderService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { productId } = req.query;

  if (!productId) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  try {
    const hasPurchased = await orderService.hasPurchased(
      session.user.id,
      productId
    );
    res.status(200).json({ hasPurchased });
  } catch (error) {
    res.status(500).json({ message: "Error checking purchase status", error });
  }
}
