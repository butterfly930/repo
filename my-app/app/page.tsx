import Image from "next/image";
import DiscoverAlbania from "../public/DiscoverAlbania.jpeg";
import Albania1 from "../public/Albania1.jpg";
import Albania2 from "../public/Albania2.jpg";
import Albania3 from "../public/Albania3.jpg";
import PackCard from "@/components/PackCard";
import { fetchTouristPacks } from "@/lib/api";

export default async function Home() {
  const packs = await fetchTouristPacks();
  const packImages = [Albania1, Albania2, Albania3];
  return (
    <div className="flex items-center justify-center bg-white font-sans ">
      <main className="flex  w-full  flex-col items-center justify-between bg-white">
        <div className="flex flex-col items-center gap-6 text-center text-center">
          <Image 
          src={DiscoverAlbania}
          alt="Discover Albania with Vodafone Tourist Pack"
          />
          <h1 className="max-w-xs text-3xl leading-10 tracking-tight text-center text-black mt-20 ">
            <span className="font-bold">Zgjidh</span> Planin
          </h1>
          <p className="max-w-md text-lg leading-8  text-black">
            Zgjidh paketën që do përdorësh gjatë qëndrimit.
          </p>
        </div>
        <section className="mb-30">
          <h2 className="section-title text-black ml-75 font-semibold text-3xl mt-15 mb-15">Tourist Packs</h2>
          <div className="pack-grid text-black">
            {packs.map((pack, index) => (
              <PackCard
                key={index}
                title={pack.title}
                subtitle={pack.subtitle}
                price={pack.price}
                duration={pack.duration}
                features={pack.features}
                image={packImages[index % packImages.length]}
              />
            ))}
          </div>
        </section>
        <button type="button" className="h-10 w-10 rounded-full bg-vodafone-white flex items-center justify-center opacity-50" ><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.59904 14.8063L16.6824 7.72298M16.6824 7.72298L9.59904 0.639648M16.6824 7.72298H1.05737" stroke="#0D0D0D" strokeLinecap="round"></path></svg></button>
    
      </main>
    </div>
  );
}
