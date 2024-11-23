import { HubImg } from "../assets";
import HubCard from "../cards/HubCard";
import { hubs } from "../constants";

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
  