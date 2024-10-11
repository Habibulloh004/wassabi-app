import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createMessage = mutation({
  args: {
    text: v.string(),
    status: v.boolean(),
  },
  handler: async (ctx, args) => {
    const newMessage = await ctx.db.insert("messages", {
      text: args.text,
      status: args.status,
    });
    return newMessage;
  },
});

export const getMessages = query({
  handler: async (ctx) => {
    return ctx.db.query("messages").collect();
  },
});
