import React, { useState, useEffect } from 'react';
import countryData from './resources/countryData.json';
import './App.css';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);

    const filteredSuggestions = inputText.trim() !== ''
    ? countryData.filter((country) =>
        country.name.toLowerCase().startsWith(inputText.toLowerCase())
      )
    : [];

  setSuggestions(filteredSuggestions);
};
  const handleKeyDown = (event) => {
    // Hide content when Escape key is pressed
    if (event.key === 'Escape') {
      setSuggestions([]);
    }
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Search countries..."
        value={searchText}
        onChange={handleInputChange}
      />
      <ul>
        {suggestions.map((country) => (
          <li key={country.code}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
