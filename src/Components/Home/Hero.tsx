import React from "react";
import namxVideo from "../../assets/NAMX HUV 2022.mp4";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={namxVideo}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1
          className="text-3xl md:text-[30px]"
          style={{
            fontWeight: "200",
            lineHeight: "30px",
            color: "rgb(255,255,255)",
            fontFamily: "Kanit, sans-serif",
          }}
        >
          {t("The 1st premium")}
        </h1>
        <h2
          className="py-4 text-[50px]"
          style={{
            fontWeight: "500",
            lineHeight: "50px",
            color: "rgb(255,255,255)",
            fontFamily: "Kanit, sans-serif",
          }}
        >
          {t("HUV")}
        </h2>
        {/* <Search /> */}
      </div>
    </div>
  );
};

export default Hero;
