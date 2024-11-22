import { HubImg } from "../assets";
import { hubs } from "../constants";


const HubCard = ({ hubs }) => {
  return (
    <div className={`flex flex-col items-center group border p-4 w-56 group bg-gradient-to-b from-transparent via-transparent to-earthy-tan relative rounded-xl bg-clip-border  text-gray-700 shadow-md h-full transition-transform duration-700 transform hover:-translate-y-3`}>
                <img
            src={ HubImg }
            alt={`${hubs.name}'s picture`}
            className={`w-40 p-5 group-hover:scale-110 transition duration-500 ease-in-out`}
          />
      <h3 className="font-bold text-2xl pb-2">{hubs.name}</h3>
      <p>{hubs.location}</p>
    </div>
  );
};

const HubsSectionHome = () => {
  return (
    <section className="pb-10 pt-4 px-2 bg-earthy-beige">
      <h2 className="text-2xl font-bold text-earthy-brown">Hubs</h2>
      <div className="flex flex-wrap justify-center gap-2 mt-8">
        {hubs.map((hub) => (
          <HubCard key={hub.hubId} hubs={hub} />
        ))}
      </div>
    </section>
  );
}

export default HubsSectionHome;
  