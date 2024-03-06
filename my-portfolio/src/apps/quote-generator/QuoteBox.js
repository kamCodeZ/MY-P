// src/components/quote-generator/QuoteBox.js
import React, { useState, useEffect } from 'react';
import './QuoteBox.css';

const QuoteBox = () => {
  const [quotesData, setQuotesData] = useState([]);
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentAuthor, setCurrentAuthor] = useState('');
  const [colors, setColors] = useState([
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
  ]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://api.quotable.io/quotes?limit=10');
        const jsonResponse = await response.json();
        if (Array.isArray(jsonResponse.results)) {
          setQuotesData(jsonResponse.results);
          getQuote();
        }
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, []);

  const getRandomQuote = () => {
    return quotesData[Math.floor(Math.random() * quotesData.length)];
  };

  const getQuote = () => {
    const randomQuote = getRandomQuote();
    setCurrentQuote(randomQuote.content);
    setCurrentAuthor(randomQuote.author.name);

    updateTweetButton();

    const color = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[color];
    document.body.style.color = colors[color];
    document.querySelectorAll('.button').forEach((button) => {
      button.style.backgroundColor = colors[color];
    });
  };

  const updateTweetButton = () => {
    const tweetButton = document.getElementById('tweet-quote');
    if (tweetButton) {
      tweetButton.href = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
        `"${currentQuote}" ${currentAuthor}`
      )}`;
    }
  };

  const handleNewQuoteClick = () => {
    getQuote();
  };

  return (
    <div id="quote-box">
      <div className="quote-text">
        <i className="fa fa-quote-left"> </i>
        <span id="text">{currentQuote}</span>
      </div>
      <div className="quote-author">- <span id="author">{currentAuthor}</span></div>
      <div className="buttons">
        <a className="button" id="tweet-quote" title="Tweet this quote!" target="_top">
          <i className="fa fa-twitter"></i>
        </a>
        <button className="button" id="new-quote" onClick={handleNewQuoteClick}>
          New quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
