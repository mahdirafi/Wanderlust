import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { Fraunces, IBM_Plex_Mono, Inter } from "next/font/google";
import { headers } from "next/headers";
import Image from "next/image";
import { FiCalendar, FiCheck, FiMapPin } from "react-icons/fi";

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["500", "600"],
    variable: "--font-fraunces",
});
const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-inter",
});
const plexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["500"],
    variable: "--font-plex-mono",
});

const BookingPageDetails = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;

     const {token} = await auth.api.getToken({
        headers: await headers()
      });

    const res = await fetch(`http://localhost:5000/booking/${user?.id}`,{
        headers: {
            authorization: `Bearer ${token}`
        }
    }, {
        cache: "no-store",
    });
    const bookings = await res.json();

    return (
        <div
            className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} max-w-5xl mx-auto px-6 py-10`}>
            <div className="mb-10">
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#5C7A6E] mb-2">
                    Your Itinerary
                </p>
                <h1 className="font-[family-name:var(--font-fraunces)] text-4xl font-semibold text-[#12242B]">
                    My Bookings
                </h1>
            </div>

            <div className="flex flex-col gap-6">
                {bookings.map((booking) => (
                    <div
                        key={booking._id}
                        className="group relative flex flex-col sm:flex-row bg-[#FBF8F3] rounded-2xl border border-black/[0.06] shadow-[0_4px_20px_rgba(18,36,43,0.06)] hover:shadow-[0_10px_30px_rgba(18,36,43,0.12)] transition-all duration-300 overflow-hidden">
                        {/* Image */}
                        <div className="relative w-full sm:w-64 h-56 sm:h-auto flex-shrink-0 overflow-hidden">
                            <Image
                                src={booking.imageUrl}
                                alt={booking?.destinationName}
                                fill
                                priority
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#12242B]/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                                <FiMapPin className="w-3 h-3" />
                                {booking.destinationName}
                            </div>
                        </div>

                        {/* Ticket perforation divider (vertical, between image and content) */}
                        <div className="relative hidden sm:flex flex-col items-center justify-between py-2">
                            <div className="absolute -top-3 w-6 h-6 rounded-full bg-white" />
                            <div className="h-full border-l-2 border-dashed border-[#5C7A6E]/30" />
                            <div className="absolute -bottom-3 w-6 h-6 rounded-full bg-white" />
                        </div>
                        {/* Horizontal divider for mobile stack */}
                        <div className="sm:hidden border-t-2 border-dashed border-[#5C7A6E]/30 mx-4" />

                        {/* Content */}
                        <div className="flex-1 p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                            <div className="flex-1">
                                <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#12242B] mb-2 leading-snug">
                                    {booking.destinationName}
                                </h2>

                                <div className="flex items-center gap-2 text-[#5C7A6E] font-[family-name:var(--font-inter)] text-sm mb-3">
                                    <FiCalendar className="w-4 h-4" />
                                    {new Date(booking.departureDate).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </div>

                                <p className="font-[family-name:var(--font-plex-mono)] text-3xl font-medium text-[#D98C3D]">
                                    ${booking.price}
                                </p>
                            </div>

                            <div className="flex sm:flex-col gap-3 sm:w-40">
                                <Button
                                    variant="outline"
                                    className="flex-1 rounded-full border-[#5C7A6E]/40 text-[#3F6652] hover:bg-[#3F6652]/5 font-[family-name:var(--font-inter)] text-sm gap-1.5">
                                    <FiCheck className="w-4 h-4" />
                                    Confirm
                                </Button>

                                <BookingCancelAlert bookingId={booking._id} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookingPageDetails;