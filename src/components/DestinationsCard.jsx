import React from 'react';
import Image from 'next/image';
import { MdLocationOn } from 'react-icons/md';
import { FaRegCalendar } from 'react-icons/fa';
import { Card } from '@heroui/react';

const DestinationsCard = ({destination}) => {
    const {imageUrl, price , destinationName, duration, country} = destination;
    return (
        <Card className="p-3">
            <Image
            src={imageUrl}
            alt={destinationName}
            width={400} 
            height={400}
            priority />

            <div>
                <div className="flex items-center gap-1">
                    <MdLocationOn /> <span>{country}</span>
                </div>
                <div>
                    <div className='text-xl font-bold'>
                    <h2> {destinationName}</h2>
                </div>
                <div className="flex items-center justify-between gap-6">
                    <div className='flex items-center gap-2'><FaRegCalendar /> {duration}</div>
                    <div className='text-xl font-semibold'>$ {price}</div>
                </div>
                </div>
            </div>

            
        </Card>
    );
};

export default DestinationsCard;