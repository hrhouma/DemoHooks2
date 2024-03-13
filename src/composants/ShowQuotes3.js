import React, { useState, useEffect } from 'react';

function ShowQuotes3() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://api.quotable.io/quotes?limit=10')
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.results.map(q => `${q.content} — ${q.author}`));
      });
  }, []);

  return (
    <div>
      <h2>Quotes List</h2>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShowQuotes3;