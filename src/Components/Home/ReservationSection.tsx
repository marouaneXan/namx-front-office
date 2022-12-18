import Button from "../Button";
import { useTranslation } from "react-i18next";

const ResevationSection = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col space-y-6 items-center mx-auto py-16 px-4">
      <h1
        className="text-3xl md:text-[35px] w-1/2 text-center"
        style={{
          fontWeight: "300",
          lineHeight: "35px",
          fontFamily: "Kanit, sans-serif",
          color: "rgb(1, 29, 37)",
        }}
      >
        {t("PRE-ORDER YOUR")}{" "}
        <span
          className="text-[35px]"
          style={{
            fontWeight: "bold",
            lineHeight: "35px",
            fontFamily: "Kanit, sans-serif",
            color: "rgb(1, 29, 37)",
          }}
        >
          {t("NAMX VEHICLE")}
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
        {t("Reservation desc")}
      </p>
      <Button content={t("Pre-order now")} />
    </div>
  );
};

export default ResevationSection;
