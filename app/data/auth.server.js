import { createClient } from "~/utils/client";

export async function signup(credentials) {
    const client = createClient();
    const { customer } = await client.customers.create({
                first_name: 'Alec',
        last_name: 'Reynolds',
        email: credentials.email,
        password: credentials.password
      })
    //   ({

    //     email: 'user@example.com',
    //     password: 'supersecret'
    //   });
    return customer;
}

export async function login(credentials) {
    const client = createClient();
    const { customer } = await client.auth.authenticate({
        email: credentials.email,
        password: credentials.password
      })

      console.log(customer)
    return customer;
}