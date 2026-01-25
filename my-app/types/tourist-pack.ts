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
  id: string;
  name: string;
  description: string;
  recommendationType: string;
  recommendationItem: RecommendationItem[];
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
