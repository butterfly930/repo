import Image from "next/image";
    import phoneIcon from "../../../public/phoneIcon.svg";
    import JuthIcon from "../../../public/JuthIcon.svg";
    import VodafoneIcon from "../../../public/VodafoneIcon.svg";

export default function ModalBenefits() {
    return (
        <>
        <h1 className="text-2xl font-bold mb-4 text-black">Benefitet</h1>
        <div className="flex-1 bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center text-black sm:gap-5 justify-between">
            <Image src={phoneIcon} alt="Iphone icon" width={120} height={120} />
            <div className="flex-1">
              <h3 className="font-bold mb-3">Shërbimet Përfshijnë</h3>
              <p>Akses në My Vodafone App dhe Juth App.</p>
            </div>
            <div className="flex gap-2">
              <Image
                src={JuthIcon}
                alt="Juth app icon"
                width={50}
                height={50}
              />
              <Image
                src={VodafoneIcon}
                alt="Vodafone icon"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
        </>
    );
}