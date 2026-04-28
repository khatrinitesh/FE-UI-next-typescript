const base = process.env.NEXT_PUBLIC_ASSET_BASE || "";

const withBase = (path: string) => `${base}${path}`;

export const IMAGES = {
  logo1: withBase("/images/logo1.png"),
  logo2: withBase("/images/logo2.png"),
  placeholder: withBase("/images/placeholder.png"),
};

export const VIDEOS = {
  intro: withBase("/videos/intro.mp4"),
  banner: withBase("/videos/banner.mp4"),
};

export const FONTS = {
  primary: withBase("/fonts/Inter-Regular.woff2"),
  bold: withBase("/fonts/Inter-Bold.woff2"),
};

export const LOTTIES = {
  loading: withBase("/lotties/loading.json"),
  success: withBase("/lotties/success.json"),
  error: withBase("/lotties/error.json"),
};

export const PDFS = {
  resume: withBase("/pdfs/resume.pdf"),
  brochure: withBase("/pdfs/brochure.pdf"),
};

export const ASSETS = {
  images: IMAGES,
  videos: VIDEOS,
  fonts: FONTS,
  lotties: LOTTIES,
  pdfs: PDFS,
};
