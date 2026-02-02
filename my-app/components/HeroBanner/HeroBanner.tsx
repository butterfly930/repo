import Image from "next/image";
import DiscoverAlbania from "../../public/DiscoverAlbania.jpeg";

export default function HeroBanner() {
  return (
    <div className="flex flex-col items-center gap-6 text-center text-center">
      <Image
        src={DiscoverAlbania}
        alt="Discover Albania with Vodafone Tourist Pack"
      />
      <h1 className="max-w-xs mb-20 text-4xl leading-10 tracking-tight text-center text-black mt-20 ">
        <span className="font-bold">Zgjidh</span> Planin
      </h1>
    </div>
  );
}
