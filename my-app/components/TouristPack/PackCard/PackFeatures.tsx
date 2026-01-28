import Image from "next/image";
import { PackFeaturesProps } from "../../../types/tourist-pack";

export default function PackFeatures({
  features,
  getIconForFeature,
  parseFeature,
}: PackFeaturesProps) {
  return (
    <ul className="mt-4 space-y-1">
      <p className="text-md font-semibold text-black">Detajet e paketes</p>
      {features.map((feature: string, id: number) => {
        const icon = getIconForFeature(feature);
        const { label, value } = parseFeature(feature);

        return (
          <li
            key={id}
            className="text-sm text-black flex items-center gap-3 mt-6"
          >
            {icon && (
              <Image
                src={icon}
                alt="feature icon"
                width={36}
                height={36}
                className="flex-shrink-0"
              />
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
