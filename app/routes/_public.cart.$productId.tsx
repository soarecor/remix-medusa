import { useNavigate, useLoaderData } from "@remix-run/react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node"; // or cloudflare/deno
import DeleteItemForm from "~/components/deleteItemForm";
import Modal from "~/components/util/Modal";
import { createClient } from "~/utils/client";
import { json } from "@remix-run/node";

const client = createClient();

export const loader = async ({ params }: LoaderArgs) => {
    console.log('FROM CART MODAL:', params.productId)
return params.productId
};

export default function DeleteItem() {
    const  data = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  function closeHandler() {
    // navigate programmatically
    navigate("..");
  }

  return (
    <Modal onClose={closeHandler}>
                {JSON.stringify(data)}
      <h1>"hey"</h1>
      <DeleteItemForm />
    </Modal>
  );
}
