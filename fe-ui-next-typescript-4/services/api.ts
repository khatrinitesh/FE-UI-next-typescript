import axios from "axios";
import { ReactNode } from "react";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* =========================s
   Types
========================= */
export interface Product {
  title: ReactNode;
  API: string;
  Description: string;
  Category?: string;
  Link?: string;
}

/* =========================
   Normalize Response
========================= */
const normalizeResponse = (data: any): Product[] => {
  if (!data) return [];

  // Case 1: already array
  if (Array.isArray(data)) return data;

  // Case 2: standard public API format
  if (Array.isArray(data.entries)) return data.entries;

  // Case 3: sometimes wrapped in data
  if (Array.isArray(data.data)) return data.data;

  // Case 4: unknown shape → try values
  if (typeof data === "object" && data !== null) {
    const values = Object.values(data).flat() as Product[];
    return values.filter(Boolean);
  }

  return [];
};

export const fetchByPost = async (): Promise<Product[]> => {
  try {
    const res = await API.get("");

    console.log("RAW API:", res.data);

    const normalized = normalizeResponse(res.data);

    console.log("NORMALIZED:", normalized);

    return normalized;
  } catch (error) {
    console.error("API ERROR:", error);
    return [];
  }
};

export const fetchByPostId = (
  id: number,
  products: Product[],
): Product | null => {
  if (!Array.isArray(products)) return null;

  if (id < 0 || id >= products.length) return null;

  return products[id];
};

export const fetchByPostName = (
  name: string,
  products: Product[],
): Product | null => {
  return products.find((item) => item.API === name) || null;
};
