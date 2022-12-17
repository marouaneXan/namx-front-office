import React from "react";
import namxRecharge from "../../assets/namx-recharge.webp";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const NamxRecharge = () => {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <div className="flex flex-col space-y-6 items-center mx-auto py-16 px-4">
      <img
        className="object-cover"
        src={namxRecharge}
        width="600"
        height="152"
        alt="/"
        loading="lazy"
      />
      <h1
        className="text-3xl md:text-[35px] w-1/2 text-center"
        style={{
          fontWeight: "300",
          lineHeight: "35px",
          fontFamily: "Kanit, sans-serif",
          color: "rgb(1, 29, 37)",
        }}
      >
        {location.search === "?lng=fr"
          ? t("CAPSULES")
          : t("HYDROGEN")}{" "}
        <span
          className="text-[35px]"
          style={{
            fontWeight: "bold",
            lineHeight: "35px",
            fontFamily: "Kanit, sans-serif",
            color: "rgb(1, 29, 37)",
          }}
        >
          {location.search === "?lng=fr"
            ? t("HYDROGEN")
            : t("CAPSULES")}
        </span>
      </h1>
      <p
        className="py-4 text-xl md:text-[16px] w-1/2 text-center"
        style={{
          fontWeight: "300",
          lineHeight: "22px",
          fontFamily: "Kanit, sans-serif",
          color: "rgb(1, 29, 37)",
        }}
      >
        {t("NAMXCHARGE")}
      </p>
    </div>
  );
};

export default NamxRecharge;
