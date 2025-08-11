import AccordionSection from "@/components/accordionSection/AccordionSection";
import ConcatItemList from "@/components/concatItemList/ConcatItemList";
import HeadTitle from "@/components/headTitle/HeadTitle";
import ItemList from "@/components/itemList/ItemList";
import ResponsiveNotice from "@/components/responsiveNotice/ResponsiveNotice";
import UserRatingSection from "@/components/userRatingSection/UserRatingSection";
import VerticalLine from "@/components/verticalLine/VerticalLine";
import VerticalLineControlsSection from "@/components/verticalLineControlsSection/VerticalLineControlsSection";
import VideoPlayerSection from "@/components/VideoPlayerSection/VideoPlayerSection";
import VortexSection from "@/components/VortexSection/VortexSection";
import ZebraTableSection from "@/components/zebraTableSection/ZebraTableSection";
import ZigZagSection from "@/components/ZigZagSection/ZigZagSection";
import ZoomHoverSection from "@/components/zoomHoversection/ZoomHoverSection";
import { zebraDataTable, ZIGZAGDATA } from "@/constants/constants";
import React from "react";

const HomePageSection = () => {
  const sum = (a: any, b: any) => {
    return a + b;
  };
  const result = sum(1, 2);
  return (
    <div className="container mx-auto">
      <HeadTitle>Home page</HeadTitle>
      {result}
      <ResponsiveNotice />
      <UserRatingSection />
      <VerticalLine />
      <VerticalLineControlsSection />
      <VideoPlayerSection />
      <VortexSection />
      <ZebraTableSection rows={zebraDataTable} />
      {ZIGZAGDATA.map((item) => (
        <ZigZagSection key={item.id} item={item} />
      ))}
      <ZoomHoverSection
        src="https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D"
        alt="Sample Image"
        zoomScale={1.2}
        className="w-[300px] rounded shadow-lg"
      />
      <AccordionSection
        id="one"
        title="Section 1"
        content="Content for section 1"
      />
      <AccordionSection
        id="two"
        title="Section 2"
        content="Content for section 2"
      />
      <AccordionSection
        id="three"
        title="Section 3"
        content="Content for section 3"
      />
      <ConcatItemList />
      <ItemList />
    </div>
  );
};

export default HomePageSection;
