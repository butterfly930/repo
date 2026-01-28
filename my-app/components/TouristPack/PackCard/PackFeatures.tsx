import Image from "next/image";
import { PackFeaturesProps } from "../../../types/tourist-pack";

export default function PackFeatures({
  features,
  getIconForFeature,
  parseFeature,
}: PackFeaturesProps) {
  return (
    <ul className="list-none mt-4">
      <p className="text-md font-semibold text-black">Detajet e paketes</p>
      {features.map((feature: string, id: number) => {
        const icon = getIconForFeature(feature);
        const { label, value } = parseFeature(feature);
        return (
          <li
            key={id}
            className="py-[10px] flex items-center text-black gap-3 border-b border-gray-100 last:border-b-0"
          >
            {icon ? (
              <span className="inline-flex items-center justify-center mr-[10px]">
                <Image
                  src={icon}
                  alt="feature icon"
                  width={36}
                  height={36}
                  className="flex-shrink-0"
                />
              </span>
            ) : (
              <span className="font-bold text-[#e60000] mr-[10px]">✓</span>
            )}
            <div className="flex justify-between w-full">
              <span className="text-lg">{label}</span>
              {value && <span className="font-bold text-xl">{value}</span>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
