import { ApodResponse } from "@/interface/common";
import axiosInstance from "./axiosInstance";

export const getApod = async (): Promise<ApodResponse> => {
  const res = await axiosInstance.get("/planetary/apod");
  return res.data;
};
