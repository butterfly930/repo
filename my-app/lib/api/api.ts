// api.ts
import { z } from "zod";
import { Pack } from "@/types/tourist-pack";
import transformApiDataToPacks from "@/lib/api/transformApiDataToPacks";
import { TouristRecommendationSchema } from "@/lib/api/schemas/touristPackZODSchema";

export async function fetchTouristPacks(): Promise<Pack[]> {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const rawData = await response.json();

    // ✅ Validate the raw data with Zod
    const validatedData = z.array(TouristRecommendationSchema).parse(rawData);

    // ✅ Transform validated data into UI-friendly Pack[]
    const packs = transformApiDataToPacks(validatedData);

    return packs;
  } catch (error) {
    console.error("Error fetching tourist packs:", error);
    throw error; // re-throw so the caller knows something went wrong
  }
  
}
