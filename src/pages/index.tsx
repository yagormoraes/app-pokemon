import { useEffect, useState } from "react";
import cardsData from "../data/sampleCards.json";
import { CardItem } from "../components/CardItem";
import { Card } from "../types/Card";

export default function Home() {
    
  const [collection, setCollection] = useState<string[]>([]);

    useEffect(() => {
        const storedCollection = localStorage.getItem("collection");
        if (storedCollection) {
        setCollection(JSON.parse(storedCollection));
        }
    }, []);

  const toggleCard = (id: string) => {
    const updated = collection.includes(id)
      ? collection.filter(cid => cid !== id)
      : [...collection, id];
    setCollection(updated);
    localStorage.setItem("collection", JSON.stringify(updated));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {cardsData.map((card: Card) => (
        <CardItem
          key={card.id}
          card={card}
          isInCollection={collection.includes(card.id)}
          toggleCard={toggleCard}
        />
      ))}
    </div>
  );
}
