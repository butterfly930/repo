import HeroBanner from "@/components/HeroBanner/HeroBanner";
import { TouristPack } from "@/components/TouristPack/TouristPack";
import SaveTimeHero from "@/components/SaveTimeHero/SaveTimeHero";
import Benefite from "@/components/Benefits/Benefits";
import QandA from "@/components/QandA/QandA";

export default async function Home() {
  return (
    <main className="flex  w-full  flex-col items-center justify-center justify-between bg-white font-sans">
      <HeroBanner />
      <TouristPack />
      <SaveTimeHero text="Kurse kohë dhe shmang rradhën duke përfituar shërbim me prioritet në dyqanin tonë Vodafone Rinas Airport Shop." />
      <Benefite />
      <QandA />
    </main>
  );
}
