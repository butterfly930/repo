import Image from "next/image";
import SaveTimeHeroBanner_Background from "../../public/SaveTimeHeroBanner_Background_Static.jpg";

type SaveTimeHeroProps = {
  text: string;
};

export default function SaveTimeHero({ text }: SaveTimeHeroProps) {
  return (
    <div className="font-bold text-2xl  text-black relative">
      <Image
        src={SaveTimeHeroBanner_Background}
        alt="Save Time Hero Background"
        className="object-cover mb-10  h-[90px] xs:h-[90px] sm:h-[100px] md:h-[100px] lg:h-[90px]"
      />
      <p className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-8  mb-10 text-white xs:text-xs sm:text-lg md:text-lg lg:text-2xl">
        {text}
      </p>
    </div>
  );
}
