// lib/services/orderService.ts
import dbConnect from "@/lib/dbConnect";
import OrderModel from "@/lib/models/OrderModel";

const hasPurchased = async (userId: string, productId: string) => {
  await dbConnect();

  const orders = await OrderModel.find({
    user: userId,
    "orderItems.product": productId,
  });

  return orders.length > 0;
};

export default { hasPurchased };
