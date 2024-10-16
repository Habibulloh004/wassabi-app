import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("order").collect();
  },
});

export const put = mutation({
  args: {
    spot_id: v.float64(),
    phone: v.string(),
    products: v.any(),
  },
  handler: async (ctx, args) => {
    const { spot_id, phone, products } = args;
    const newOrder = await ctx.db.insert("order", {
      spot_id,
      phone,
      products
    });
    return newOrder;
  },
});

export const patch = mutation({
  args: {
    _id: v.string(),
    _creationTime: v.float64(),
    spot_id: v.float64(),
    phone: v.string(),
    products: v.any(),
  },
  handler: async (ctx, args) => {
    const findOrder = await ctx.db
      .query("order")
      .filter((q) => q.eq(q.field("_id"), args._id))
      .collect();
    return await ctx.db.patch(findOrder[0]._id, args);
  },
});

export const deleteOrder = mutation({
  args: {
    _id: v.id("order"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args._id);
  },
});