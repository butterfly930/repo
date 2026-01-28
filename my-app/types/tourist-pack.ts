// API Response Types
export interface ProductCharacteristic {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  productCharacteristic: ProductCharacteristic[];
}

export interface Price {
  taxRate: number;
  dutyFreeAmount: {
    unit: string;
    value: number;
  };
  taxIncludedAmount: {
    unit: string;
    value: number;
  };
  "@baseType": string;
  "@type": string;
}

export interface ProductPrice {
  priceType: string;
  price: Price;
}

export interface RecommendationProduct {
  id: string;
  description: string;
  isBundle: boolean;
  name: string;
  product: Product[];
  productPrice: ProductPrice[];
}

export interface RecommendationItem {
  product: RecommendationProduct;
  priority?: number;
}

export interface TouristRecommendation {
  id?: string;
  recommendationItem?: {
    product?: {
      name: string;
      description: string;
      product: {
        id: string;
        productCharacteristic: {
          name: string;
          value: string;
        }[];
      }[];
      productPrice: {
        price: {
          taxIncludedAmount: {
            value: number;
            unit: string;
          };
        };
      }[];
    };
  }[];
}

// Transformed Pack Type for UI
export interface Pack {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  priceNumber: number;
  duration: string;
  features: string[];
}

//PacCardProps
import { StaticImageData } from "next/image";
export default interface PackCardProps {
  title: string;
  price: string;
  subtitle: string;
  duration: string;
  features: string[];
  image: StaticImageData;
}

export interface PackFeaturesProps {
    features: string[];
    getIconForFeature: (feature: string) => string | null;
    parseFeature: (feature: string) => { label: string; value: string };
}