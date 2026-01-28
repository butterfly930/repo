import PackCardProps from "../../../types/tourist-pack";

export default function PackHeader({ title, price, subtitle }: PackCardProps) {
  return (
    <div>
      <h3 className="text-4xl font-light text-black">{title}</h3>
      <div className="text-4xl font-semibold mt-4 text-black">{price}</div>
      <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
    </div>
  );
}
