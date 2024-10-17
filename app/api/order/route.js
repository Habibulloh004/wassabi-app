import { api } from "@/convex/_generated/api";
import { postApi } from "@/lib/requestApi";
import { POSTER, POSTER_API } from "@/lib/utils";
import axios from "axios";
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
    //   {
    //         "service_mode": "Доставка",
    //         "payment_method": "Наличными",
    //         "bonus": 0,
    //         "products": [
    //             {
    //                 "product_id": "8",
    //                 "name": "Каппучино 250 мл",
    //                 "quantity": 2,
    //                 "price": 1200000.0
    //             }
    //         ],
    //         "total": 2400000.0,
    //         "chat_id": 6676957860,
    //         "phone": "+998772585817",
    //         "location": {
    //             "latitude": 41.307153,
    //             "longitude": 69.306919
    //         }
    //     }

    // {
    //   service_mode: 'Навынос',
    //   spot_id: '87459 Пфронтен',
    //   products: [Array],
    //   total: 800,
    //   chat_id: 6676957860,
    //   phone: '+998772585817',
    // },

    const args = await request.json();
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

    const [change, postToPoster] = await Promise.all([
      fetchMutation(api.order.put, {
        spot_id,
        phone,
        products,
        service_mode,
        payment_method,
        total,
        chat_id,
        location,
        status,
      }),
      postApi({
        url: `incomingOrders.createIncomingOrder`,
        body: {
          spot_id,
          phone,
          products: products.map((item) => ({
            product_id: item.product_id,
            count: item.count,
          })),
        },
      }),
    ]);

    // Continue with the results
    console.log(change, postToPoster);

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

    return new Response(
      JSON.stringify({ data: "Order deleted successfully" }),
      {
        status: 200,
      }
    );
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
    return new Response(JSON.stringify({ error: "Failed to patch tasks" }), {
      status: 500,
    });
  }
}
