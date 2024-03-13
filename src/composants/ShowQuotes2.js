import React, { useState, useEffect } from 'react';

function ShowQuotes2() {
  const [quote, setQuote] = useState('');
  const [trigger, setTrigger] = useState(0); // Ajouté pour déclencher useEffect

  // La fonction pour charger une nouvelle citation
  const loadNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(`${data.content} — ${data.author}`);
      });
  };

  // useEffect pour charger une citation au montage et à chaque modification de `trigger`
  useEffect(() => {
    loadNewQuote();
  }, [trigger]);

  return (
    <div>
      <h2>Random Quote</h2>
      <p>{quote}</p>
      <button onClick={() => setTrigger(prev => prev + 1)}>Load New Quote</button>
    </div>
  );
}

export default ShowQuotes2;