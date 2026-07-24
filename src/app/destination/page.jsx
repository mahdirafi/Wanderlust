import DestinationsCard from "@/components/DestinationsCard";

const DestinationPage = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`)
    const destinations = await res.json();
    console.log(destinations);

    return(
        <div className="my-14 bg-green-100">
            <h2 className="mb-6 text-center text-5xl font-bold">This is Destination Page</h2>
            <div className="grid grid-cols-4 gap-4">
                {
                    destinations.map(destination => <DestinationsCard 
                        key={destination._id} 
                        destination={destination}/> 
                     )
                }
            </div>
        </div>
    )
}
export default DestinationPage;