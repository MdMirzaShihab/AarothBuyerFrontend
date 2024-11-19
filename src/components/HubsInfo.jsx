import { hubs } from "../constants";


const HubsInfo = () => {
  return (
    <section className="py-16 px-8 bg-earthy-beige">
      <h2 className="text-2xl font-bold text-earthy-brown">Hubs and Logistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {hubs.map((hub, index) => (
          <div
            key={index}
            className="border p-4 rounded shadow bg-earthy-tan text-earthy-brown"
          >
            <h3 className="font-bold">{hub.name}</h3>
            <p>Location: {hub.location}</p>
            <p>Available Trucks: {hub.availableTrucks}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HubsInfo;
  