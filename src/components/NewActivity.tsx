import { useState } from "react";
import Card from "./Card";

function NewActivity() {
  const [showCard, setShowCard] = useState(false);

  function handleClick() {
    setShowCard(!showCard);
  }
  return (
    <div>
      <h2 onClick={handleClick}>+ New activity</h2>
      {showCard && <Card />}
    </div>
  );
}

export default NewActivity;
