"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const session = useSession();
    console.log(session);
    const menuPages = [
        {
            pageName: "Home",
            path: '/'
        },
        {
            pageName: "Posts",
            path: '/posts'
        },
        {
            pageName: "Meals",
            path: '/meals'
        },
        {
            pageName: "Gallery",
            path: '/gallery'
        },
        {
            pageName: "Dashboard",
            path: '/dashboard'
        }
    ];
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-0.5">
                        {
                            menuPages.map((menuPage, i) =>
                                <li key={i}>
                                    <Link href={menuPage.path}>{menuPage.pageName}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-0.5">
                    {
                        menuPages.map((menuPage, i) =>
                            <li key={i}>
                                <Link href={menuPage.path}>{menuPage.pageName}</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    session?.data?.user?.name &&
                    <div className="flex items-center me-1 gap-0.5">
                    <div className="avatar placeholder">
                        <div className="avatar online">
                            <div className="w-10 rounded-full">
                                <Image src={session?.data?.user?.image} alt="Profile Pic" height={6} width={6}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-bold">{session?.data?.user?.name}</h4>
                        <small>{session?.data?.user?.type}</small>
                    </div>
                </div>
                }

                {
                    session?.status === "authenticated" ?
                        <button onClick={() => signOut()} className="btn btn-error">Logout</button>
                        :
                        <>
                        <Link href="/api/auth/signin" className="btn btn-neutral">Login</Link>
                        <Link href="/api/auth/signup" className="ms-0.5 btn btn-neutral">Signup</Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;