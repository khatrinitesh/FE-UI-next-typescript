"use client";
import Button from "@/components/button/Button";
import HeadTitle from "@/components/headTitle/HeadTitle";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const navigate = useRouter();

  const handleBack = () => {
    navigate.push("/");
  };
  return (
    <div className="notFoundContent flex flex-col gap-[30px] items-center justify-center bg-blue-300 h-dvh text-center">
      <HeadTitle className="">404 - Page Not Found</HeadTitle>
      <Button label="Back to homepage" onClick={handleBack} />
    </div>
  );
};

export default NotFound;
