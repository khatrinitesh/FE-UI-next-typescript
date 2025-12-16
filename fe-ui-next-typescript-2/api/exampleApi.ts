import { Service } from "@/interface/service.interface";
import axiosInstance from "./axiosInstance";

export const getServices = async (): Promise<Service[]> => {
  const response = await axiosInstance.get("/services");
  return response.data;
};
