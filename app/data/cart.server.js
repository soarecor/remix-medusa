import {createCookieSessionStorage, redirect} from '@remix-run/node'
const SESSION_SECRET = process.env.SESSION_SECRET
import { createCookie } from "@remix-run/node";
import { json } from "@remix-run/node";

const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "__cartsession",
         secure:process.env.NODE_ENV === 'production',
         secrets: [SESSION_SECRET],
         sameSite: 'lax',
         maxAge: 30*24*60*60, // 30 days
         httpOnly: true
    }
})

export async function createCartSession(cartId) {
    const session = await sessionStorage.getSession()
    session.set('cartId', cartId)

    return json(null, {
        headers: { "Set-Cookie": await sessionStorage.commitSession(session) }
    })
}

export async function getCartFromSession(request) {
    const session = await sessionStorage.getSession(
      request.headers.get('Cookie')
    );
  
    const cartId = session.get('cartId');
    // console.log('STORED CART ID', cartId)
  
    if (!cartId) {
      return null
    }
  
    return cartId;
}