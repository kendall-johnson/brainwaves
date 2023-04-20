import React, { useState, useEffect } from 'react';
import getQuote from '../../utilities/quotes-api';


export default function RandomQuote() {
  const [quote, setQuote] = useState({ quote: '', author: '' });

  useEffect(() => {
    async function fetchQuote() {
      try {
        const data = await getQuote();
        setQuote(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchQuote();
  }, []);

  return (
    <div className="flex justify-center items-center">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <p className="text-xl font-medium mb-4">{quote.quote}</p>
      <p className="text-gray-500 text-sm">{quote.author}</p>
    </div>
  </div>
  );
}