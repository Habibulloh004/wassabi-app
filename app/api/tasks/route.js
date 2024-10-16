import { api } from "@/convex/_generated/api";
import { preloadQuery, fetchMutation, fetchQuery } from "convex/nextjs";

export async function GET() {
  //   const tasks = await preloadQuery(api.tasks.get);
  const tasks = await fetchQuery(api.tasks.get);

  return Response.json([...tasks]);
}

export async function PUT(request) {
  const args = await request.json();
  //   const fetch = await fetchQuery(api.tasks.get)
  const change = await fetchMutation(api.tasks.put, {
    text: args.text,
    isCompleted: false,
  });
  console.log(change);

  return Response.json({ data: "hey" });
}

export async function PATCH(request) {
  const args = await request.json();
  console.log(args);

  const change = await fetchMutation(api.tasks.patch, { ...args });
  console.log(change);

  return Response.json({ data: "hey" });
}
