import { api } from "@/convex/_generated/api";
import { preloadQuery, fetchMutation, fetchQuery } from "convex/nextjs";

export async function GET() {
  try {
    // const tasks = await preloadQuery(api.tasks.get);
    const tasks = await fetchQuery(api.order.get);
    return new Response(JSON.stringify([...tasks]), { status: 200 });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch tasks" }), {
      status: 500,
    });
  }
}

export async function PUT(request) {
  try {
    const args = await request.json();
    const { spot_id, phone, products } = args;

    const change = await fetchMutation(api.order.put, {
      spot_id,
      phone,
      products,
    });
    console.log(change);

    return new Response(JSON.stringify({ ...change }), { status: 200 });
  } catch (error) {
    console.error("Error updating order:");
    return new Response(
      JSON.stringify({ error: `Failed to update order + ${error}` }),
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  console.log(id);
  try {
    const change = await fetchMutation(api.order.deleteOrder, { _id: id });
    console.log(change);

    return new Response(JSON.stringify({ data: "Order deleted successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error patching tasks:", error);
    return new Response(JSON.stringify({ error: "Failed to patch tasks" }), {
      status: 500,
    });
  }
}


export async function PATCH(request) {
  try {
    const args = await request.json();
    console.log(args);

    const change = await fetchMutation(api.order.patch, { ...args });
    console.log(change);

    return new Response(JSON.stringify({ data: "hey" }), { status: 200 });
  } catch (error) {
    console.error("Error patching tasks:", error);
    return new Response(JSON.stringify({ error: "Failed to patch tasks" }), { status: 500 });
  }
}
