import PackCardProps from "../../../types/tourist-pack";

export default function PackHeader({ title, price, subtitle }: PackCardProps) {
  return (
    <div className="p-[25px] text-center bg-white">
      <h3 className="text-[30px] font-light mb-2 text-black">{title}</h3>
      <div className="text-[30px] font-bold text-[#e60000] mb-2">{price}</div>
      <p className="text-[12px] text-[#252020] mb-[15px]">{subtitle}</p>
    </div>
  );
}
