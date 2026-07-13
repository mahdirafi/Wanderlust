import { EditModal } from '@/components/EditModal';
import { Button } from '@heroui/react';
import Image from 'next/image';
import { Link } from "@heroui/react";

import { BiArrowBack  } from 'react-icons/bi';
import { FiMapPin, FiCalendar, FiCheck, FiArrowRight } from 'react-icons/fi';
import { DeleteAlert } from '@/components/DeleteAlert';

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/destination/${id}`, {
    cache: 'no-store',
  });
  const destination = await res.json();

  const {
    _id,
    imageUrl,
    price,
    destinationName,
    duration,
    country,
    description,
    highlights, // optional — array of strings, e.g. ["Luxury beachfront accommodation", ...]
  } = destination;

  return (
      <div className="min-h-screen bg-white w-11/12 mx-auto">

        <div className='flex justify-between items-center py-6'>
          <Button variant="outline" asChild>
            <Link href="/destination" className="flex items-center gap-2 shadow-xl">
              <BiArrowBack />
              <span>BACK TO DESTINATION</span>
            </Link>
          </Button>
          <div variant="outline" className="flex items-center gap-1 cursor-pointer shadow">
            
            <EditModal destination={destination}/>
            <DeleteAlert destination={destination}/>
          </div>
        </div>

      {/* ---------- BANNER ---------- */}
      <section className="relative h-[380px] w-full overflow-hidden sm:h-[420px]">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          priority
          className="object-cover"
        />
      </section>

      {/* ---------- CONTENT ---------- */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-10 sm:px-10 lg:grid-cols-3">
        {/* ---- left: main info ---- */}
        <div className="lg:col-span-2">
          <p className="flex items-center gap-1.5 text-sm text-[#0F2438]/50">
            <FiMapPin /> {country}
          </p>

          <h1 className="mt-2 font-serif text-4xl font-medium text-[#0F2438] sm:text-5xl">
            {destinationName}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-[#0F2438]/70">
            <span className="flex items-center gap-1.5">
              <FiCalendar />
              {duration}
            </span>
          </div>

          <div className="mt-8 border-t border-[#0F2438]/10 pt-8">
            <h2 className="font-serif text-2xl font-medium text-[#0F2438]">
              Overview
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#0F2438]/70">
              {description ||
                `Discover the magic of ${destinationName} with pristine beaches, ancient temples, and vibrant culture — a ${duration} escape through ${country}.`}
            </p>
          </div>

          {highlights?.length > 0 && (
            <div className="mt-8 border-t border-[#0F2438]/10 pt-8">
              <h2 className="font-serif text-2xl font-medium text-[#0F2438]">
                Highlights
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[15px] text-[#0F2438]/80"
                  >
                    <FiCheck className="mt-0.5 shrink-0 text-[#1B4B4F]" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ---- right: sticky booking card ---- */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 rounded-2xl border border-[#0F2438]/10 p-6 shadow-[0_10px_30px_-15px_rgba(15,36,56,0.15)]">
            <p className="text-xs uppercase tracking-wide text-[#0F2438]/50">
              Starting from
            </p>
            <p className="mt-1 font-serif text-3xl font-semibold text-[#1B4B4F]">
              ${price}
            </p>
            <p className="text-sm text-[#0F2438]/50">per person</p>

            <input
              type="date"
              className="mt-5 w-full rounded-lg border border-[#0F2438]/10 bg-[#F5F1E8]/60 px-3 py-2.5 text-sm text-[#0F2438]/80 outline-none focus:ring-2 focus:ring-[#1B4B4F]/30"
            />

            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#1B4B4F] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#153c3f]">
              Book Now
              <FiArrowRight size={16} />
            </button>

            <ul className="mt-5 space-y-2.5 border-t border-[#0F2438]/10 pt-5">
              <li className="flex items-center gap-2 text-sm text-[#0F2438]/70">
                <FiCheck className="mt-0.5 shrink-0 text-[#1B4B4F]" size={16} /> Free cancellation up to 7 days
              </li>
              <li className="flex items-center gap-2 text-sm text-[#0F2438]/70">
                <FiCheck className="mt-0.5 shrink-0 text-[#1B4B4F]" size={16} /> Travel insurance included
              </li>
              <li className="flex items-center gap-2 text-sm text-[#0F2438]/70">
                <FiCheck className="mt-0.5 shrink-0 text-[#1B4B4F]" size={16} /> 24/7 customer support
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;