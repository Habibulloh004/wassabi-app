import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  order: defineTable({
    spot_id: v.float64(),
    phone: v.string(),
    products: v.any(),
  })
});
