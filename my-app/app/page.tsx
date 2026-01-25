import { fetchTouristPacks } from "@/lib/api";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import { TouristPack } from "@/components/TouristPack/TouristPack";
import SaveTimeHero from "@/components/SaveTimeHero/SaveTimeHero";
import Benefite from "@/components/Benefite/Benefite";
import QandA from "@/components/QandA/QandA";

export default async function Home() {
  const packs = await fetchTouristPacks();

  return (
    <div className="flex items-center justify-center bg-white font-sans ">
      <main className="flex  w-full  flex-col items-center justify-between bg-white">
        <HeroBanner />
        <TouristPack />
        <SaveTimeHero/>
        <Benefite />
        <QandA />
      </main>
    </div>
  );
}
