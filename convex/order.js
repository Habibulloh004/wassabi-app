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
    service_mode: v.float64(),
    payment_method: v.string(),
    total: v.float64(),
    chat_id: v.float64(),
    location: v.object({
      latitude: v.float64(),
      longitude: v.float64(),
    }),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const {
      spot_id,
      phone,
      products,
      service_mode,
      payment_method,
      total,
      chat_id,
      location,
      status,
    } = args;
    const newOrder = await ctx.db.insert("order", {
      spot_id,
      phone,
      products,
      service_mode,
      payment_method,
      total,
      chat_id,
      location,
      status,
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
    service_mode: v.float64(),
    payment_method: v.string(),
    total: v.float64(),
    chat_id: v.float64(),
    location: v.object({
      latitude: v.float64(),
      longitude: v.float64(),
    }),
    status: v.string(),
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
