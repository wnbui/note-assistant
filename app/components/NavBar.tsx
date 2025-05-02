'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    const { data: session } = useSession();

    return (
        <div className="navbar bg-white/30 backdrop-blur-lg shadow-lg border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
            <div className="flex-1">
                <Link href="/" className="text-2xl font-extrabold text-gray-900 hover:text-primary transition duration-300">
                    Note Assistant
                </Link>
                {/* Mobile dropdown menu */}
                <div className="dropdown sm:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-box w-52 border border-gray-200">
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        {session ? (
                            <li><Link href="/AIassistant">AI Assistant</Link></li>
                        ) : null}
                    </ul>
                </div>
                {/* Desktop inline menu */}
                <div className="hidden sm:flex gap-2">
                    <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition duration-300 px-3 py-2 rounded-lg hover:bg-gray-100">
                        Contact
                    </Link>
                    <Link href="/faq" className="text-gray-600 hover:text-gray-900 transition duration-300 px-3 py-2 rounded-lg hover:bg-gray-100">
                        FAQ
                    </Link>
                    {session ? (
                        <Link href="/AIassistant" className="text-gray-600 hover:text-gray-900 transition duration-300 px-3 py-2 rounded-lg hover:bg-gray-100">
                            AI Assistant
                        </Link>
                    ) : null}
                </div>
            </div>
            <div className="flex-none gap-2">
                {session ? (
                    <>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:scale-105 transition duration-300">
                                <div className="w-10 rounded-full">
                                    <Image
                                        src={session.user?.image || '/images/default-avatar.png'}
                                        alt="User Avatar"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-xl border border-gray-200 w-52"
                            >
                                <li>
                                    <a className="justify-between">
                                        {session.user?.email}
                                    </a>
                                </li>
                                <li>
                                    <Link href="/profile">
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => signOut({ callbackUrl: '/' })}
                                        className="text-red-500 hover:text-red-700 transition duration-300"
                                    >
                                        Sign Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <button
                        className="btn bg-blue-500 text-white font-medium rounded-lg px-4 py-2 shadow-md hover:bg-blue-600 transition duration-300"
                        onClick={() => signIn('cognito')}
                    >
                        Sign In
                    </button>
                )}
            </div>
        </div>
    );
}