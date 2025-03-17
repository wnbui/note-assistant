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
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition duration-300 px-3 py-2 rounded-lg hover:bg-gray-100">
                    Contact
                </Link>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900 transition duration-300 px-3 py-2 rounded-lg hover:bg-gray-100">
                    FAQ
                </Link>
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