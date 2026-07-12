import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
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

            <ul className="flex space-x-4 font-semibold">
                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/login">LogIn</Link></li>
                <li><Link href="/signup">signUp</Link></li>
            </ul>

        </nav>
    );
};

export default NavBar;