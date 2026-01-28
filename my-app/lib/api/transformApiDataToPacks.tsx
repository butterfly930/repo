import { TouristRecommendation, Pack } from "@/types/tourist-pack";

export default function transformApiDataToPacks(data: TouristRecommendation[]): Pack[] {
  console.log("Transform input data:", JSON.stringify(data, null, 2));
  
  const packs = data
    .map((recommendation) => {
      // Add safety check
      if (!recommendation.recommendationItem || recommendation.recommendationItem.length === 0) {
        console.warn("Missing recommendationItem for:", recommendation.id);
        return null;
      }
      
      const mainProduct = recommendation.recommendationItem[0]?.product;
      if (!mainProduct) {
        console.warn("Missing product for:", recommendation.id);
        return null;
      }

      const internetProduct = mainProduct.product.find(
        (product) => product.id === "internet"
      );
      if (!internetProduct) {
        console.warn("Missing internet product for:", recommendation.id);
        return null;
      }

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
        const gbValue = parseInt(data);
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

  console.log("Transformed packs:", packs);
  return packs;
}