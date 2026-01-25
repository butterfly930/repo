import Image from "next/image";
import DiscoverAlbania from "../../public/DiscoverAlbania.jpeg";
import Link from "next/link";

export default function HeroBanner() {
    return (
       <div className="flex flex-col items-center gap-6 text-center text-center">
          <Link href="/">
            <Image
              src={DiscoverAlbania}
              alt="Discover Albania with Vodafone Tourist Pack"
            />
          </Link>
          <h1 className="max-w-xs text-4xl leading-10 tracking-tight text-center text-black mt-20 ">
            <span className="font-bold">Zgjidh</span> Planin
          </h1>
          <p className="max-w-md text-lg leading-8  text-black">
            Zgjidh paketën që do përdorësh gjatë qëndrimit.
          </p>
        </div>
    )
}