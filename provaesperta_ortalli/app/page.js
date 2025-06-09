import React from "react";

const Titolo = ({
  sopratitolo = "Escursioni Giornaliere",
  titolo = "Nessuno ti mostrerà Venezia come noi",
  sottotitolo1 = "Lasciati trasportare da una brezza marina mentre ammiri i palazzi storici, i ponti iconici e i tesori nascosti della città. Vivi l'emozione di vedere",
  sottotitolo2 = "dal suo elemento più autentico: l'acqua.",
  colorTitolo = "text-purple-700", // Aggiunto per personalizzare il colore del titolo
  colorSottotitolo = "text-gray-600", // Aggiunto per personalizzare il colore del sottotitolo
  backgroundColor = "bg-white", // Aggiunto per personalizzare lo sfondo del box
  padding = "p-10", // Aggiunto per personalizzare il padding
  fontSize = "text-4xl", // Aggiunto per personalizzare la dimensione del font del titolo
}) => {
  return (
    <div className="flex items-center min-h-screen">
      <title>{sopratitolo}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div className={`px-24 ${backgroundColor} rounded-lg ${padding}`}>
        <h2 className="text-gray-700 text-lg">{sopratitolo}</h2>
        <h1 className={`text-gray-800 mt-2 ${fontSize}`}>
          {titolo.split(" ").map((word, index) => {
            if (word === "Venezia") {
              return (
                <span key={index} className={`${colorTitolo} font-bold`}>
                  {word}
                </span>
              );
            }
            return word + " ";
          })}
        </h1>
        <p className={`${colorSottotitolo} mt-4`}>
          {sottotitolo1} <span className={`${colorTitolo}`}>Venezia</span> {sottotitolo2}
        </p>
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <Titolo
        sopratitolo="Le nostre escursioni"
        titolo="Scopri Venezia in modo unico!"
        sottotitolo1="Naviga attraverso i canali e vivi l'emozione della città da una prospettiva mai vista prima."
        sottotitolo2="Unisciti a noi per un'esperienza senza pari."
        colorTitolo="text-teal-600"
        colorSottotitolo="text-gray-500"
        backgroundColor="bg-blue-50"
        padding="p-12"
        fontSize="text-3xl"
      />
    </div>
  );
};