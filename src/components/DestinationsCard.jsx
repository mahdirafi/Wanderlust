import React from 'react';
import Image from 'next/image';
import { MdLocationOn } from 'react-icons/md';
import { FaRegCalendar } from 'react-icons/fa';
import { Button, Card } from '@heroui/react';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

const DestinationsCard = ({ destination }) => {
  const {_id , imageUrl, price, destinationName, duration, country } = destination;

  return (
    <Card className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image with overlay */}
      <div className="relative h-56 w-full overflow-hidden sm:h-64">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

        {/* Price badge */}
        <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-900 shadow-md backdrop-blur-sm">
          ${price}
        </div>

        {/* Location on image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-sm font-medium text-white">
          <MdLocationOn className="text-base" />
          <span>{country}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4 sm:p-5">
        <h2 className="line-clamp-1 text-lg font-bold text-gray-900 sm:text-xl">
          {destinationName}
        </h2>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <FaRegCalendar className="text-primary" />
            <span>{duration}</span>
          </div>
          <div className="text-base font-semibold text-gray-900">
            ${price}{' '}
            <span className="text-xs font-normal text-gray-500">/ person</span>
          </div>
        </div>

        <Link href={`/destination/${_id}`} className="mt-1 w-full">
          <Button
            variant="solid"
            color="primary"
            className="w-full rounded-xl font-medium"
            endContent={<FiExternalLink />}
          >
            Book Now
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default DestinationsCard;