import Image from "next/image";
import SaveTimeHeroBanner_Backround from "../../public/testBanner.jpg";

export default function SaveTimeHero() {
    return (
        <div className="font-bold text-2xl  text-black relative">
            <Image 
                src={SaveTimeHeroBanner_Backround} 
                alt="Save Time Hero Background" 
                className="object-cover mb-10 w-500 h-20"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center px-6 mb-10 text-white">Kurse kohë dhe shmang rradhën duke përfituar shërbim me prioritet në dyqanin tonë Vodafone Rinas Airport Shop.</p>
        </div>
    )
}