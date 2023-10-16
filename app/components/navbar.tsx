import {
    Link,
    NavLink,
    useLoaderData,
    useRouteLoaderData,
    useMatches,
    Form,
} from '@remix-run/react'
import * as React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import pao from '~/assets/pao.png'
import { Menu } from 'lucide-react'

export default function Navbar() {
    const [state, setState] = React.useState(false)

    const links = [
        // {
        //   label: "Home",
        //   url: "/",
        // },
        {
            label: 'Story',
            url: '/about',
        },
        {
            label: 'Shop',
            url: '/products',
        },
        {
            label: 'Chat',
            url: '/chat',
        },
    ]

    const data = useLoaderData()
    // console.log("CART DATA", data);

    const userId = data.userId
    const itemLength = data.itemLength

    return (
        <nav className="flex items-center justify-between px-8 py-10 bg-black">
            {/* Site Logo */}
            <div className="pl-2 flex justify-between w-screen md-w-auto">
                <Link to="/">
                    <img src={pao} width="150" />
                </Link>
                <div className="md:hidden">
                    <button
                        className="text-white outline-none p-2 focus:border-white focus:border"
                        onClick={() => setState(!state)}
                    >
                        <Menu />
                    </button>
                    <div
                        className={`h-screen w-screen left-0 bg-black pl-2 z-10 pb-3 mt-8 md:hidden ${
                            state ? 'absolute' : 'hidden'
                        }`}
                    >
                        <div className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {links.map((link, index) => (
                                <NavLink
                                    key={index}
                                    to={link.url}
                                    className="text-white block hover:text-indigo-600"
                                    onClick={() => setState(!state)}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Navigation Links */}
            <div className="space-x-4 text-white hidden md:block">
                {links.map((link, index) => (
                    <NavLink key={index} to={link.url} className="navlink">
                        {link.label}
                    </NavLink>
                ))}
            </div>
            {/* Shopping Cart Indicator/Checkout Link */}
            <div className="md:flex items-center justify-between hidden">
                <div className="font-semibold text-white hover:text-emerald-500">
                    <NavLink
                        to="/cart"
                        className="inline-flex items-center space-x-1 text-white duration-300 "
                    >
                        <BiShoppingBag className="text-xl" />{' '}
                        <span>{itemLength}</span>
                    </NavLink>
                </div>

                <div className="px-4">
                    {userId && (
                        <Form method="post" action="/logout" id="logout-form">
                            <button className="cta-alt text-white">
                                Logout
                            </button>
                        </Form>
                    )}

                    {userId && (
                        <NavLink
                            to="/user"
                            className="inline-flex items-center space-x-1 text-white duration-300"
                        >
                            User
                        </NavLink>
                    )}

                    {!userId && (
                        <NavLink
                            to="/login"
                            className="inline-flex items-center space-x-1 text-white duration-300"
                        >
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    )
}
