import React, { useState, useEffect } from 'react';

function ShowQuotes1() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(`${data.content} — ${data.author}`);
      });
  }, []);

  return (
    <div>
      <h2>Random Quote</h2>
      <p>{quote}</p>
    </div>
  );
}

export default ShowQuotes1;