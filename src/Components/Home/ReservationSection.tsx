import Button from "../Button";

const ResevationSection = () => {
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
        RÉSERVEZ VOTRE{" "}
        <span
          className="text-[35px]"
          style={{
            fontWeight: "bold",
            lineHeight: "35px",
            fontFamily: "Kanit, sans-serif",
            color: "rgb(1, 29, 37)",
          }}
        >
          VOITURE NAMX
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
        Passez par l'étape de configuration en choisissant la personnalisation
        de la conception du moteur d'origine ou GTH et d'autres composants. La
        commercialisation des véhicules est prévue pour 2025.
      </p>
      <Button content="Réservez maintenant" />
    </div>
  );
};

export default ResevationSection;
