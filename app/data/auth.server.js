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
  const data = await client.customers.create({
    first_name: "Alec",
    last_name: "Reynolds",
    email: credentials.email,
    password: credentials.password,
  });
  // return createUserSession(customer.id, "/user");

  const headers = new Headers({
    ...data.response.headers,
  });

  return redirect("/user", {
    headers,
  });
  // return customer;
}

export async function requireUserCookie(request) {
  const cookie = request.headers.get("cookie") || "";
  const parsedCookie = cookie.split("; ").reduce((prev, current) => {
    const [name, ...value] = current.split("=");
    prev[name] = value.join("=");
    return prev;
  }, {});

  if (!parsedCookie) {
    throw redirect("/login");
  }

  let reqCookie;
  if (parsedCookie.hasOwnProperty("connect.sid")) {
    reqCookie = parsedCookie["connect.sid"];
    if (!reqCookie) throw redirect("/login");
  } else {
    throw redirect("/login");
  }
}

export async function logout(request) {
  const requestHeaders = new Headers({
    // accept: "application/json",
    // ["Content-Type"]: "application/json",
    // connection: request.headers.get("connection"),
    cookie: request.headers.get("cookie"),
  });

  const response = await fetch("http://localhost:9000/store/auth", {
    method: "DELETE",
    headers: requestHeaders,
  });

  const responseHeaders = new Headers({
    "Set-Cookie": "connect.sid=",
  });

  return redirect("/", { headers: responseHeaders });
}

export async function getUser(request) {
  const cookie = request.headers.get("cookie");

  // early exit if there are no cookies stored
  if (!cookie) {
    return null;
  }

  // split cookie string to extract just connect.sid
  const splitCookie = cookie.split("; ").reduce((prev, current) => {
    const [name, ...value] = current.split("=");
    prev[name] = value.join("=");
    return prev;
  }, {});

  // early exit if no sid
  if (!splitCookie["connect.sid"]) {
    return null;
  }

  const sid = `connect.sid=${splitCookie["connect.sid"]}`;

  const headers = new Headers({
    accept: "application/json",
    ["Content-Type"]: "application/json",
    connection: request.headers.get("connection"),
    cookie: sid,
  });

  const response = await fetch("http://localhost:9000/store/auth", {
    method: "GET",
    headers,
  });

  const customer = await response.json().then((data) => data.customer);

  // if no customer, the sid has expired. customer has to sign in again.
  if (!customer) {
    return null;
  }

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
