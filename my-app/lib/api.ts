import { TouristRecommendation, Pack } from "@/types/tourist-pack";

const API_URL =
  "https://api-web-ci-vfal.vodafone.com/file/tourist/al/recommendations.json";

export async function fetchTouristPacks(): Promise<Pack[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch packs: ${response.status}`);
    }

    const data: TouristRecommendation[] = await response.json();
    return transformApiDataToPacks(data);
  } catch (error) {
    console.error("Error fetching tourist packs:", error);
    return [];
  }
}

function transformApiDataToPacks(data: TouristRecommendation[]): Pack[] {
  const packs = data
    .map((recommendation) => {
      const mainProduct = recommendation.recommendationItem[0]?.product;
      if (!mainProduct) return null;

      const internetProduct = mainProduct.product.find(
        (product) => product.id === "internet"
      );
      if (!internetProduct) return null;

      // Helper function to get characteristic value
      const getCharValue = (name: string): string => {
        const char = internetProduct.productCharacteristic.find(
          (characteristic) => characteristic.name === name
        );
        return char?.value || "";
      };

      // Extract data
      const data = getCharValue("MOBILE_GB");
      const minutes = getCharValue("MIN");
      const validity = getCharValue("validity");

      // Build features array
      const features: string[] = [];
      
      if (data) {
        const gbValue = parseInt(data); // Convert from MB to GB
        features.push(`Internet  ${gbValue}GB `);
      }
      
      if (minutes) {
        features.push(
          minutes === "Unlimited" ? "Telefonata Kombëtare  Unlimited " : `Telefonata Kombëtare  ${minutes} `
        );
      }
      
     if (validity) {
        features.push(`Validiteti  ${validity}`);
      }

      // Get price
      const price = mainProduct.productPrice[0]?.price?.taxIncludedAmount;
      const priceValue = price ? `${price.value} ${price.unit}` : "N/A";
      const priceNumber = price?.value || 0;

      return {
        id: recommendation.id,
        title: mainProduct.name,
        subtitle: mainProduct.description,
        price: priceValue,
        priceNumber,
        duration: validity || "N/A",
        features,
      };
    })
    .filter((pack): pack is Pack => pack !== null)
    .sort((a, b) => a.priceNumber - b.priceNumber);

  return packs;
}
