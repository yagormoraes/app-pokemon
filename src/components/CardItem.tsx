import { Card } from "../types/Card";


interface Props {
  card: Card;
  isInCollection: boolean;
  toggleCard: (id: string) => void;
}

export function CardItem({ card, isInCollection, toggleCard }: Props) {
  return (
    <div className="border rounded p-2">
      <img src={card.imageUrl} alt={card.name} className="w-full" />
      <h2 className="font-bold">{card.name}</h2>
      <p>Tipo: {card.type}</p>
      <button
        onClick={() => toggleCard(card.id)}
        className={`mt-2 px-3 py-1 rounded ${isInCollection ? "bg-green-500" : "bg-gray-300"}`}
      >
        {isInCollection ? "Remover" : "Tenho"}
      </button>
    </div>
  );
}
