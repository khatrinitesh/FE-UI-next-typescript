import { HeadTitleProps } from "@/interface";

const HeadTitle = ({ children, className }: HeadTitleProps) => {
  return (
    <h2 className={`${className} headTitle text-[#09213b] text-2xl font-bold`}>
      {children}
    </h2>
  );
};

export default HeadTitle;
