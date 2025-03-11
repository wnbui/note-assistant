'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    const { data: session } = useSession();

    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                    Note Assistant
                </Link>
            </div>
            <div className="flex-none gap-2">
                {session ? (
                    <>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
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
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <a className="justify-between">
                                        {session.user?.email}
                                    </a>
                                </li>
                                <li>
                                    <button onClick={() => signOut({ callbackUrl: '/' })}>
                                        Sign Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <button
                        className="btn btn-primary"
                        onClick={() => signIn('cognito')}
                    >
                        Sign In
                    </button>
                )}
            </div>
        </div>
    );
}