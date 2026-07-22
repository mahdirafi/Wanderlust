'use client'
import { authClient } from "@/lib/auth-client";
import { DateField, Label } from "@heroui/react";
import { useState } from 'react';
import toast from "react-hot-toast";
import { FiArrowRight, FiCheck } from 'react-icons/fi';

const Booking = ({ destination }) => {

   const { data: session, } = authClient.useSession();
        const user = session?.user
        console.log(user);


    const {_id,imageUrl,price,destinationName,duration,country,description} = destination;
    console.log(destination);

    const [departureData, setDepartureDate] = useState(null);
    console.log(new Date(departureData));

    

    const handleBooking = async() =>{
      const bookingData = {
        userId: user?.id,
        userEmail: user?.email,
        userImage: user?.image,
        userName: user?.name,
        destinationId: _id,
        destinationName,
        price, 
        imageUrl,
        country,
        departureDate: new Date(departureData)

      };
      console.log(Booking)
    const res = await fetch("http://localhost:5000/booking" , {
      method: "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body:JSON.stringify(bookingData)
    })
    const data = await res.json();
    console.log(data);

    toast.success("You Booked successfully!")
    }

  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-8 rounded-2xl border border-[#0F2438]/10 p-6 shadow-[0_10px_30px_-15px_rgba(15,36,56,0.15)]">
        <p className="text-xs uppercase tracking-wide text-[#0F2438]/50">
          Starting from
        </p>
        <p className="mt-1 font-serif text-3xl font-semibold text-[#1B4B4F]">
          ${price}
        </p>
        <p className="text-sm text-[#0F2438]/50">per person</p>
 
        {/* <input 
          onChange={setDepartureDate}
          type="date"
          className="mt-5 w-full rounded-lg border border-[#0F2438]/10 bg-[#F5F1E8]/60 px-3 py-2.5 text-sm text-[#0F2438]/80 outline-none focus:ring-2 focus:ring-[#1B4B4F]/30"
        />   */}
        <DateField className="w-[256px]" name="date" onChange={setDepartureDate}>
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>


        <button onClick={handleBooking} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#1B4B4F] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#153c3f] cursor-pointer">
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
  );
};

export default Booking;