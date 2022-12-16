import React from "react";
import namxRecharge from "../../assets/namx-recharge.webp";

const NamxRecharge = () => {
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
        CAPSULE{" "}
        <span
          className="text-[35px]"
          style={{
            fontWeight: "bold",
            lineHeight: "35px",
            fontFamily: "Kanit, sans-serif",
            color: "rgb(1, 29, 37)",
          }}
        >
          HYDROGÈNE
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
        Afin de réduire les contraintes liées aux déplacements décarbonés comme
        le temps de recharge, l'immobilisation et la proximité des stations,
        nous proposons une formule spéciale au-delà du NamX. Un système de
        livraison à domicile par abonnement devrait voir le jour et les capsules
        pourraient être utilisées à de multiples occasions.
      </p>
    </div>
  );
};

export default NamxRecharge;
