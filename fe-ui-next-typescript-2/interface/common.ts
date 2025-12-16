export interface ApodResponse {
  title: string;
  explanation: string;
  url: string;
  date: string;
  media_type: "image" | "video";
}
