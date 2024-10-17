import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  order: defineTable({
    spot_id: v.float64(),
    phone: v.string(),
    products: v.any(),
    service_mode: v.float64(),
    payment_method: v.string(),
    total: v.float64(),
    chat_id: v.float64(),
    location: v.object({
      latitude: v.float64(),
      longitude: v.float64()
    }),
    status: v.string()
  })
});
