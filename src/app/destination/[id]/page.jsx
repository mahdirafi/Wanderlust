import { EditModal } from '@/components/EditModal';
import { Button, Link } from '@heroui/react';
import Image from 'next/image';

import Booking from '@/components/Booking';
import { DeleteAlert } from '@/components/DeleteAlert';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { BiArrowBack } from 'react-icons/bi';
import { FiCalendar, FiCheck, FiMapPin } from 'react-icons/fi';

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers: await headers()
  })
  console.log(token);

  const res = await fetch(`http://localhost:5000/destination/${id}`,{
    headers: { authorization: `Bearer ${token}`}
  } , {
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
    highlights,  
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
        <Booking destination={destination} />
      </div>
    </div>
  );
};

export default DestinationDetailsPage;