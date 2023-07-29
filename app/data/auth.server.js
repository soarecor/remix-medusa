import { createClient } from "~/utils/client";
import { createCookieSessionStorage, json, redirect } from "@remix-run/node";
const SESSION_SECRET = process.env.SESSION_SECRET;

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secure: process.env.NODE_ENV === "production",
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    httpOnly: true,
  },
});

async function createUserSession(userId, redirectPath) {
  const session = await sessionStorage.getSession();
  session.set("userId", userId);
  // console.log('USER SESH', json(session))
  return redirect(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

export async function getUserFromSession(request) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  const userId = session.get("userId");

  if (!userId) {
    return null;
  }

  return userId;
}

export async function requireUserSession(request) {
  const userId = await getUserFromSession(request);

  if (!userId) {
    throw redirect("/login");
  }

  return userId;
}

export async function destroyUserSession(request) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

export async function signup(credentials) {
  const client = createClient();
  const { customer } = await client.customers.create({
    first_name: "Alec",
    last_name: "Reynolds",
    email: credentials.email,
    password: credentials.password,
  });
  return createUserSession(customer.id, "/user");
  // return customer;
}

export async function requireUserCookie(request) {
  let cookie = request.headers.get("cookie") || "";
  if (!cookie) {
    throw redirect("/login");
  }
}

export async function getUser(request) {
  let cookie = request.headers.get("cookie") || "";
  if (!cookie) {
    return null;
  }

  const headers = new Headers({
    accept: "application/json",
    ["Content-Type"]: "application/json",
    connection: request.headers.get("connection"),
    cookie: request.headers.get("cookie"),
  });

  const response = await fetch("http://localhost:9000/store/auth", {
    method: "GET",
    headers,
  });

  const customer = await response.json().then((data) => data.customer);
  // console.log("CUSTOMEERRR", customer);
  return customer;
}

export async function login(credentials) {
  const client = createClient();
  const data = await client.auth.authenticate({
    email: credentials.email,
    password: credentials.password,
  });

  const headers = new Headers({
    ...data.response.headers,
  });

  return redirect("/user", {
    headers,
  });
}
