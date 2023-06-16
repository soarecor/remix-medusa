import { createClient } from "~/utils/client";
import {createCookieSessionStorage, redirect} from '@remix-run/node'
const SESSION_SECRET = process.env.SESSION_SECRET

const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "__session",
         secure:process.env.NODE_ENV === 'production',
         secrets: [SESSION_SECRET],
         sameSite: 'lax',
         maxAge: 30*24*60*60, // 30 days
         httpOnly: true
    }
})

async function createUserSession(userId, redirectPath) {
    const session = await sessionStorage.getSession()
    session.set('userId', userId)
    return redirect(redirectPath, {
        headers:{
            'Set-Cookie': await sessionStorage.commitSession(session)
        }
    })
}


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

     return createUserSession(customer.id, '/about')
    // return customer.id;
}