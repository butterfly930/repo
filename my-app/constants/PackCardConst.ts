import wifiIcon from "@/public/wifiIcon.svg";
import TelefonataKombetareIcon from "@/public/TelefonataKometareIcon.svg";

export const getIconForFeature = (feature: string) => {
    const lower = feature.toLowerCase();
    if (lower.includes("internet")) return wifiIcon;
    if (lower.includes("telefonata") || lower.includes("validitet"))
      return TelefonataKombetareIcon;
    return null;
  };



export const parseFeature = (feature: string): { label: string; value: string } => {
  const f = feature.trim();
  const rules = [
    "Internet",
    "Telefonata Kombëtare",
    "Validiteti",
  ];

  for (const label of rules) {
    if (f.toLowerCase().includes(label.toLowerCase())) {
      return {
        label,
        value: f.replace(label, "").trim(),
      };
    }
  }

  const parts = f.split(" ");
  return {
    label: parts.slice(0, -1).join(" "),
    value: parts.at(-1) || "",
  };
};