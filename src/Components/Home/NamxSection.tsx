import React from "react";
import namx4 from "../../assets/namx4.webp";
import namx1 from "../../assets/namx1.webp";
import namx2 from "../../assets/namx2.webp";
import namx3 from "../../assets/namx3.webp";
import namx5 from "../../assets/namx5.jpg";

const NamxSection = () => {
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
        NOUVELLE EXPLORATION DE{" "}
        <span
          className="text-[35px]"
          style={{
            fontWeight: "bold",
            lineHeight: "35px",
            fontFamily: "Kanit, sans-serif",
            color: "rgb(1, 29, 37)",
          }}
        >
          LA MOBILITÉ AUTOMOBILE
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
        Nous concilions mobilité humaine infinie et préservation de
        l'environnement à grande échelle grâce à l'hydrogène vert. Egalement, le
        zéro émission.
      </p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={namx3}
          alt="/"
        />
        <img className="w-full h-full object-cover" src={namx4} alt="/" />
        <img className="w-full h-full object-cover" src={namx1} alt="/" />
        <img className="w-full h-full object-cover" src={namx2} alt="/" />
        <img className="w-full h-full object-cover" src={namx5} alt="/" />
      </div>
    </div>
  );
};

export default NamxSection;
