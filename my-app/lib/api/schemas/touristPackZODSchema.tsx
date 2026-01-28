// touristPackSchema.ts
import { z } from "zod";

const PriceSchema = z.object({
  value: z.number().optional(),
  unit: z.string().optional(),
});

const ProductCharacteristicSchema = z.object({
  name: z.string().optional(),
  value: z.string().optional(),
});

const ProductSchema = z.object({
  id: z.string().optional(), // was required, now optional
  productCharacteristic: z.array(ProductCharacteristicSchema).optional(),
});

const ProductPriceSchema = z.object({
  price: z.object({
    taxIncludedAmount: PriceSchema.optional(),
  }).optional(),
});

const MainProductSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  product: z.array(ProductSchema).optional(),
  productPrice: z.array(ProductPriceSchema).optional(),
});

const RecommendationItemSchema = z.object({
  product: MainProductSchema.optional(),
});

export const TouristRecommendationSchema = z.object({
  id: z.string().optional(),
  recommendationItem: z.array(RecommendationItemSchema).optional(),
});
