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
          {features.map((feature, index) => (
            <li key={index} className="pack-feature">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer */}
      <div className="pack-footer">
        <button
          className="pack-button"
          onClick={handleActivate}
          disabled={false}
        >
          Activate
        </button>
      </div>
    </div>
  );
}
