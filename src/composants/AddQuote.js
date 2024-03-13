import React, { useState } from 'react';

function AddQuote() {
  const [quote, setQuote] = useState('');

  return (
    <div>
      <h2>Add a Favorite Quote</h2>
      <input type="text" value={quote} onChange={(e) => setQuote(e.target.value)} />
      <p>Your favorite quote: {quote}</p>
    </div>
  );
}

export default AddQuote;