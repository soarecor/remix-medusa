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
// import pao from '~/assets/pao.png'
import zero from '~/assets/zer0.svg'
import zerow from '~/assets/0-w.svg'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [state, setState] = React.useState(false)

    const links = [
        // {
        //   label: "Home",
        //   url: "/",
        // },
        // {
        //     label: 'Story',
        //     url: '/about',
        // },
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
        <nav className="flex lg:grid lg:grid-cols-5 items-center justify-between md:py-10 bg-black">
            {/* Site Logo */}
            <div className="flex flex-1 justify-between items-center p-4 sm:p-8 lg:pl-0 col-span-1 lg:col-span-1 lg:col-start-2">
                <Link to="/">
                    <img
                        src={zero}
                        className="pl-4 md:pl-0 w-[70px] md:w-[100px]"
                    />
                </Link>
                <div className="lg:hidden">
                    <button
                        className="text-white outline-none p-2"
                        onClick={() => setState(!state)}
                    >
                        <Menu />
                    </button>

                    {/* MENU MODAL */}
                    <div
                        className={`h-screen w-screen top-0 left-0 bg-black z-10 pb-3 overflow-hidden lg:hidden ${
                            state ? 'absolute' : 'hidden'
                        }`}
                    >
                        <button
                            className="text-white outline-none absolute right-2 top-2 p-2"
                            onClick={() => setState(!state)}
                        >
                            <X />
                        </button>
                        <div className="grid justify-center content-center items-center h-full">
                            <img
                                src={zerow}
                                className="pb-7 mx-auto text-center w-[40px] md:w-[150px]"
                            />
                            {links.map((link, index) => (
                                <NavLink
                                    key={index}
                                    to={link.url}
                                    className="text-white block text-4xl py-4"
                                    onClick={() => setState(!state)}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    {/* MENU MODAL */}
                </div>
            </div>
            {/* Navigation Links */}
            <div className="hidden lg:flex md:pl-6 md:col-span-2 lg:col-span-1 justify-between text-white ">
                {links.map((link, index) => (
                    <NavLink key={index} to={link.url} className="navlink">
                        {link.label}
                    </NavLink>
                ))}
            </div>
            {/* Shopping Cart Indicator/Checkout Link */}
            <div className="hidden lg:flex md:col-span-1 lg:col-span-2 justify-end ">
                {/* <div className="font-semibold text-white hover:text-emerald-500">
                    <NavLink
                        to="/cart"
                        className="inline-flex items-center space-x-1 text-white duration-300 "
                    >
                        <BiShoppingBag className="text-xl" />{' '}
                        <span>{itemLength}</span>
                    </NavLink>
                </div> */}

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
