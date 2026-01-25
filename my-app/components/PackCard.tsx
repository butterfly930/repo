"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface PackCardProps {
  title: string;
  price: string;
  subtitle: string;
  duration: string;
  features: string[];
  image: StaticImageData;
}
export default function PackCard({
  title,
  price,
  subtitle,
  duration,
  features,
  image,
}: PackCardProps) {
  const handleActivate = async () => {};

  return (
    <div className="pack-card">
      <div className="pack-image-container relative w-full h-48 flex-shrink-0">
        <Image 
          src={image} 
          alt={title}
          fill
          className="pack-image object-cover rounded-t-lg"
        />
      </div>
      {/* Card Header */}
      <div className="pack-header">
        <h3 className="pack-title">{title}</h3>
        <div className="pack-price">{price}</div>
        <p className="pack-subtitle">Shijo komunikim të pandërprerë dhe navigo në rrjetin më të mirë në Shqipëri!</p>
        
      </div>
      {/* Card Body */}
      <div className="pack-body">
        <h2 className="font-bold text-lg mb-10">Detajet e Paketës</h2>
        <ul className="pack-features">
          {features.map((feature, index) => {
            const isInternet = /internet/i.test(feature);
            const isTelefonata = /telefonata/i.test(feature) || /minutes/i.test(feature);
            const isValiditeti = /validiteti/i.test(feature);
            const hasIcon = isInternet || isTelefonata || isValiditeti;
            return (
              <li key={index} className={`pack-feature ${hasIcon ? 'has-icon' : ''}`}>
                {isInternet && (
                  <span className="feature-icon" aria-hidden="true">
                    <img src="/wifiIcon.svg" alt="" width={35} height={18} />
                  </span>
                )}
                {(isTelefonata || isValiditeti) && (
                  <span className="feature-icon" aria-hidden="true">
                    <img src="/TelefonataKometareIcon.svg" alt="" width={35} height={18} />
                  </span>
                )}
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Card Footer */}
      <div className="pack-footer">
        <button
          className="pack-button"
          onClick={handleActivate}
          disabled={false}
        >
          Zgjidh Planin
        </button>
        <a href="./MoreDetails" className="underline ml-40 text-md pt-10">
          Më shumë detaje
        </a>
      </div>
    </div>
  );
}
