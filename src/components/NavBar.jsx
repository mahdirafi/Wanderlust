"use client";
import { authClient } from '@/lib/auth-client';
import { Button } from "@heroui/react";
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <nav className=" p-4 shadow-lg flex justify-between items-center ">
            <ul className="flex space-x-4 font-semibold cursor-pointer">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/destination">Destination</Link></li>
                <li><Link href="/my-bookings">My Bookings</Link></li>
                <li><Link href="/add-destinations">Add Destination</Link></li>
            </ul>

            <div>
                <Image
                    className="cursor-pointer h-10 w-auto"
                    src={"/assets/Wanderlast.png"}
                    alt="logo"
                    height={200}
                    width={200}
                    priority
                />
            </div>

            <ul className="flex items-center space-x-4 font-semibold">
                <li><Link href="/profile">Profile</Link></li>

                {isPending ? (
                    <li className="w-10 h-10 rounded-full bg-default-200 animate-pulse" />
                ) : user ? (
                    <>
                        <li>
                             <Image
                                referrerPolicy="no-referrer"
                                src={user.image}
                                alt={user.name}
                                className="w-10 h-auto rounded-full object-cover"
                                height={40}
                                width={40}
                                priority
                            />
                        </li>

                        <li>
                            <Button
                                onPress={handleSignOut}
                                color="danger"
                                variant="solid"
                                className="rounded-none"
                            >
                                Logout
                            </Button>
                        </li>
                    </>
                ) : (
                    <>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/signup">Sign Up</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;