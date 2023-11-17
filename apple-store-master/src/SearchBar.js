/*import React, { useState } from 'react';

const SearchBar = ({ products, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    //print the product being searched
    //console.log("Search Query:", searchQuery);
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form className='search-item' onSubmit={handleSearchSubmit}>
      <label className='search-item-label'>Search item</label>
      <br />
      <input
        className='search-bar'
        type='text'
        placeholder='Search For Products..'
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button type='submit' className='search-button'>Search</button>
    </form>
  );
};

export default SearchBar;*/


import React, { useState } from 'react';

const SearchBar = ({ products, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Define your synonym mapping here
  const synonymMap = {
    "jeans": ["pants", "trousers"],
    "shirt": ["t-shirt", "top"],
    // Add more mappings as needed
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    //implement synonym mapping

    // Split the search query into words
    const searchWords = searchQuery.split(" ");

    // Iterate over each word in the search query
    const mappedSearchWords = searchWords.map((word) => {
      // Check if the word is a key in the synonym map
      if (synonymMap[word]) {
        // If so, return the word and its synonyms
        return [word, ...synonymMap[word]];
      }
      // Otherwise, return the word as is
      return word;
    });

    // Flatten the mappedSearchWords array
    const flattenedSearchWords = mappedSearchWords.flat();

    // Join the flattenedSearchWords array into a string
    const mappedSearchQuery = flattenedSearchWords.join(" ");

    var searchedWord="";
    // Iterate over each word in the search query till we get a space
    for(var i=0;i<mappedSearchQuery.length;i++){
      if(mappedSearchQuery[i]===" "){
        break;
      }
      searchedWord+=mappedSearchQuery[i];
    }

    //check if the word is not a key in the synonym map
    if(!synonymMap[searchedWord]){
      // if it is not key then find its key:
      for(var key in synonymMap){
        if(synonymMap[key].includes(searchedWord)){
          searchedWord=key;
          break;
        }
      }
    }

    // Print the mapped search query
    console.log("Mapped Search Query:", searchedWord);

    event.preventDefault();
    onSearch(searchedWord);
  };

  return (
    <form className='search-item' onSubmit={handleSearchSubmit}>
      <label className='search-item-label'>Search item</label>
      <br />
      <input
        className='search-bar'
        type='text'
        placeholder='Search For Products..'
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button type='submit' className='search-button'>Search</button>
    </form>
  );
};

export default SearchBar;