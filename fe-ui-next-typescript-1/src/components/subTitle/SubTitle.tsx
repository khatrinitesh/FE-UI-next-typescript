import { SubTitleProps } from "@/interface";

const HeadTitle = ({ children, className }: SubTitleProps) => {
  return (
    <h2 className={`${className} subTitle text-[#09213b] text-2xl font-bold`}>
      {children}
    </h2>
  );
};

export default HeadTitle;
