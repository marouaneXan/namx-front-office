import React from "react";
import power from "../../assets/icon-power.svg";
import meter from "../../assets/icon-meter.svg";
import co2 from "../../assets/icon-co2.svg";
import namx4 from "../../assets/namx4.webp";
import { useTranslation } from "react-i18next";

const NamxDescription = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2
            className="text-[35px]"
            style={{
              fontWeight: "300",
              lineHeight: "35px",
              fontFamily: "Kanit, sans-serif",
              color: "rgb(1, 29, 37)",
            }}
          >
            {t("GREAT AUTONOMY WITH")}{" "}
            <span
              className="text-[35px]"
              style={{
                fontWeight: "bold",
                lineHeight: "35px",
                fontFamily: "Kanit, sans-serif",
                color: "rgb(1, 29, 37)",
              }}
            >
              {t("GREEN POWER")}
            </span>
          </h2>
          <p
            className="py-4"
            style={{
              fontWeight: "300",
              lineHeight: "22px",
              fontFamily: "Kanit, sans-serif",
              color: "rgb(1, 29, 37)",
            }}
          >
            {t("Namx_desc")}
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 py-4">
          <div className="flex flex-col space-x-2 lg:flex-row items-center text-center">
            <img src={power} alt="" />
            <div>
              <h3
                className="py-2 text-[35px]"
                style={{
                  fontWeight: "bold",
                  lineHeight: "35px",
                  fontFamily: "Kanit, sans-serif",
                  color: "rgb(1, 29, 37)",
                }}
              >
                800
              </h3>
              <p
                className="py-1"
                style={{
                  fontWeight: "300",
                  lineHeight: "22px",
                  fontFamily: "Kanit, sans-serif",
                  color: "rgb(1, 29, 37)",
                }}
              >
                KM {t("range")}
              </p>
            </div>
          </div>
          <div className="flex flex-col space-x-4 lg:flex-row items-center text-center">
            <img src={meter} alt="" />
            <div>
              <h3
                className="py-2 text-[35px]"
                style={{
                  fontWeight: "bold",
                  lineHeight: "35px",
                  fontFamily: "Kanit, sans-serif",
                  color: "rgb(1, 29, 37)",
                }}
              >
                300 ?? 550
              </h3>
              <p
                className="py-1"
                style={{
                  fontWeight: "300",
                  lineHeight: "22px",
                  fontFamily: "Kanit, sans-serif",
                  color: "rgb(1, 29, 37)",
                }}
              >
                {t("Horsepower")}
              </p>
            </div>
          </div>
          <div className="flex flex-col space-x-4 lg:flex-row items-center text-center">
            <img src={co2} alt="" />
            <div>
              <h3
                className="py-2 text-[35px]"
                style={{
                  fontWeight: "bold",
                  lineHeight: "35px",
                  fontFamily: "Kanit, sans-serif",
                  color: "rgb(1, 29, 37)",
                }}
              >
                300 ?? 550
              </h3>
              <p
                className="py-1"
                style={{
                  fontWeight: "300",
                  lineHeight: "22px",
                  fontFamily: "Kanit, sans-serif",
                  color: "rgb(1, 29, 37)",
                }}
              >
                {t("CO2 emissions")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center">
          <img className="w-full h-full object-cover" src={namx4} alt="/" />
          <p
            className="text-[30px] p-2"
            style={{
              fontWeight: "bold",
              lineHeight: "30px",
              fontFamily: "Kanit, sans-serif",
              color: "rgb(1, 29, 37)",
            }}
          >
            GET AN ADDITIONAL 10% OFF
          </p>
          <p
            className="py-4"
            style={{
              fontWeight: "300",
              lineHeight: "22px",
              fontFamily: "Kanit, sans-serif",
              color: "rgb(1, 29, 37)",
            }}
          >
            12 HOURS LEFT
          </p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
      </div>
    </div>
  );
};

export default NamxDescription;
