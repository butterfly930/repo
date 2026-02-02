import Albania1 from "../../public/Albania1.jpg";
import Albania2 from "../../public/Albania2.jpg";
import Albania3 from "../../public/Albania3.jpg";
import PackCard from "./PackCard/PackCard";
import { fetchTouristPacks } from "@/lib/api/api";

const packImages = [Albania1, Albania2, Albania3];

export async function TouristPack() {
  const packs = await fetchTouristPacks();

  // Empty state
  if (!packs || packs.length === 0) {
    return (
      <section className="w-full px-4 max-w-7xl mx-auto">
        <p className="text-center text-gray-600">
          No tourist packs available at the moment.
        </p>
      </section>
    );
  }

  return (
    <section className="w-full px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-black font-semibold text-3xl mb-10">
        Tourist Packs
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide">
        {packs.map((pack, id) => {
          const { title, subtitle, price, duration, features } = pack;
          return (
            <PackCard
              key={id}
              title={title}
              subtitle={subtitle}
              price={price}
              duration={duration}
              features={features}
              image={packImages[id % packImages.length]}
            />
          );
        })}
      </div>
    </section>
  );
}
