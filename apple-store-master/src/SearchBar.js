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


/*import React, { useState } from 'react';

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

export default SearchBar;*/

/*import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Define your synonym mapping here
  const synonymMap = {
    "Milk": ["Milk", "Doodh"],
  "Bread": ["Bread", "Bread"],
  "Eggs": ["Eggs", "Ande"],
  "Cereal": ["Cereal", "Cereal"],
  "Fresh Vegetables": ["Fresh Vegetables", "Vegetables", "Tazgi wale Sabziyan","Sabziyan","Sabzi"],
  "Fresh Fruits": ["Fresh Fruits", "Fruits", "Tazgi wale Phal","Phal"],
  "Rice": ["Rice", "Chawal"],
  "Pasta": ["Pasta", "Pasta"],
  "Canned Soup": ["Canned Soup", "Soup", "Canned Soup","Canned"],
  "Canned Vegetables": ["Canned Vegetables", "Vegetables", "Canned Sabziyan","Dabbi wale Sabziyan","Canned"],
  "Canned Fruits": ["Canned Fruits", "Fruits", "Canned Phal"],
  "Frozen Pizza": ["Frozen Pizza", "Pizza", "Frozen Pizza"],
  "Snack Bars": ["Snack Bars", "Snacks", "Snack Bars"],
  "Coffee": ["Coffee", "Coffee"],
  "Tea": ["Tea", "Chai"],
  "T-Shirt": ["T-Shirt", "Shirt", "T-Shirt","Kapra","Kapray","Kapday"],
  "Jeans": ["Jeans", "Pants", "Trousers", "Jeans"],
  "Dress Shirt": ["Dress Shirt", "Shirt", "Dress Shirt"],
  "Sweater": ["Sweater", "Jumper", "Knitwear", "Sweater"],
  "Socks": ["Socks", "Socks"],
  "Sneakers": ["Sneakers", "Shoes", "Footwear", "Sneakers"],
  "Dress": ["Dress", "Gown", "Frock", "Dress"],
  "Skirt": ["Skirt", "Skirts", "Skirt"],
  "Jacket": ["Jacket", "Coat", "Outerwear", "Jacket"],
  "Hoodie": ["Hoodie", "Hoodie"],
  "Laptop": ["Laptop", "Laptop","Computer"],
  "Smartphone": ["Smartphone", "Phone", "Mobile", "Smartphone"],
  "Tablet": ["Tablet", "Tablet"],
  "Headphones": ["Headphones", "Earphones", "Headphones"],
  "TV": ["TV", "Television", "TV"],
  "Camera": ["Camera", "Camera"],
  "Smartwatch": ["Smartwatch", "Watch", "Smartwatch"],
  "Bluetooth Speaker": ["Bluetooth Speaker", "Speaker", "Bluetooth Speaker"]
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    const lowercasedSearchQuery = searchQuery.toLowerCase();

    // Calculate Jaccard similarity between the search query and each synonym map entry
    let maxSimilarity = -1;
    let bestMatch = null;

    for (const key in synonymMap) {
      const lowercasedSynonyms = synonymMap[key].map(word => word.toLowerCase());
      const intersection = new Set(lowercasedSynonyms.filter(word => lowercasedSearchQuery.includes(word)));
      const union = new Set([...lowercasedSearchQuery.split(" "), ...lowercasedSynonyms]);
      const similarity = intersection.size / union.size;

      if (similarity > maxSimilarity) {
        maxSimilarity = similarity;
        bestMatch = key;
      }
    }
    console.log("maxSimilarity:", maxSimilarity);
    console.log("bestMatch:", bestMatch);
    // If a good match is found, use it as the searched word
    const searchedWord = bestMatch || lowercasedSearchQuery;

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

export default SearchBar;*/

/*import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestion, setSuggestion] = useState('');

  // Define your synonym mapping here
  const synonymMap = {
    "Milk": ["Milk", "Doodh"],
  "Bread": ["Bread", "Bread"],
  "Eggs": ["Eggs", "Ande"],
  "Cereal": ["Cereal", "Cereal"],
  "Fresh Vegetables": ["Fresh Vegetables", "Vegetables", "Tazgi wale Sabziyan","Sabziyan","Sabzi"],
  "Fresh Fruits": ["Fresh Fruits", "Fruits", "Tazgi wale Phal","Phal"],
  "Rice": ["Rice", "Chawal"],
  "Pasta": ["Pasta", "Pasta"],
  "Canned Soup": ["Canned Soup", "Soup", "Canned Soup","Canned"],
  "Canned Vegetables": ["Canned Vegetables", "Vegetables", "Canned Sabziyan","Dabbi wale Sabziyan","Canned"],
  "Canned Fruits": ["Canned Fruits", "Fruits", "Canned Phal"],
  "Frozen Pizza": ["Frozen Pizza", "Pizza", "Frozen Pizza"],
  "Snack Bars": ["Snack Bars", "Snacks", "Snack Bars"],
  "Coffee": ["Coffee", "Coffee"],
  "Tea": ["Tea", "Chai"],
  "T-Shirt": ["T-Shirt", "Shirt", "T-Shirt","Kapra","Kapray","Kapday"],
  "Jeans": ["Jeans", "Pants", "Trousers", "Jeans"],
  "Dress Shirt": ["Dress Shirt", "Shirt", "Dress Shirt"],
  "Sweater": ["Sweater", "Jumper", "Knitwear", "Sweater"],
  "Socks": ["Socks", "Socks"],
  "Sneakers": ["Sneakers", "Shoes", "Footwear", "Sneakers"],
  "Dress": ["Dress", "Gown", "Frock", "Dress"],
  "Skirt": ["Skirt", "Skirts", "Skirt"],
  "Jacket": ["Jacket", "Coat", "Outerwear", "Jacket"],
  "Hoodie": ["Hoodie", "Hoodie"],
  "Laptop": ["Laptop", "Laptop","Computer"],
  "Smartphone": ["Smartphone", "Phone", "Mobile", "Smartphone"],
  "Tablet": ["Tablet", "Tablet"],
  "Headphones": ["Headphones", "Earphones", "Headphones"],
  "TV": ["TV", "Television", "TV"],
  "Camera": ["Camera", "Camera"],
  "Smartwatch": ["Smartwatch", "Watch", "Smartwatch"],
  "Bluetooth Speaker": ["Bluetooth Speaker", "Speaker", "Bluetooth Speaker"]
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    const lowercasedSearchQuery = searchQuery.toLowerCase();

    // Calculate Jaccard similarity between the search query and each synonym map entry
    let maxSimilarity = -1;
    let bestMatch = null;

    for (const key in synonymMap) {
      const lowercasedSynonyms = synonymMap[key].map(word => word.toLowerCase());
      const intersection = new Set(lowercasedSynonyms.filter(word => lowercasedSearchQuery.includes(word)));
      const union = new Set([...lowercasedSearchQuery.split(" "), ...lowercasedSynonyms]);
      const similarity = intersection.size / union.size;

      if (similarity > maxSimilarity) {
        maxSimilarity = similarity;
        bestMatch = key;
      }
    }

    console.log("maxSimilarity:", maxSimilarity);
    console.log("bestMatch:", bestMatch);

    // If a good match is found, use it as the searched word
    const searchedWord = maxSimilarity === 0 ? 'Suggestion: Either the product is not available or Check Product Spelling' : (bestMatch || lowercasedSearchQuery);

    // Set the suggestion state for rendering on the webpage
    setSuggestion(searchedWord);

    // Print the mapped search query
    console.log("Mapped Search Query:", searchedWord);

    event.preventDefault();
    onSearch(searchedWord);
  };

  return (
    <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
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
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
};

export default SearchBar;*/


import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestion, setSuggestion] = useState('');

  // Define your synonym mapping here
  const synonymMap = {
    "Milk": ["Milk", "Doodh"],
    "Bread": ["Bread", "Bread"],
    "Eggs": ["Eggs", "Ande"],
    "Cereal": ["Cereal", "Cereal"],
    "Fresh Vegetables": ["Fresh Vegetables", "Vegetables", "Tazgi wale Sabziyan","Sabziyan","Sabzi"],
    "Fresh Fruits": ["Fresh Fruits", "Fruits", "Tazgi wale Phal","Phal"],
    "Rice": ["Rice", "Chawal"],
    "Pasta": ["Pasta", "Pasta"],
    "Canned Soup": ["Canned Soup", "Soup", "Canned Soup","Canned"],
    "Canned Vegetables": ["Canned Vegetables", "Vegetables", "Canned Sabziyan","Dabbi wale Sabziyan","Canned"],
    "Canned Fruits": ["Canned Fruits", "Fruits", "Canned Phal"],
    "Frozen Pizza": ["Frozen Pizza", "Pizza", "Frozen Pizza"],
    "Snack Bars": ["Snack Bars", "Snacks", "Snack Bars"],
    "Coffee": ["Coffee", "Coffee"],
    "Tea": ["Tea", "Chai"],
    "T-Shirt": ["T-Shirt", "Shirt", "T-Shirt","Kapra","Kapray","Kapday"],
    "Jeans": ["Jeans", "Pants", "Trousers", "Jeans"],
    "Dress Shirt": ["Dress Shirt", "Shirt", "Dress Shirt"],
    "Sweater": ["Sweater", "Jumper", "Knitwear", "Sweater"],
    "Socks": ["Socks", "Socks"],
    "Sneakers": ["Sneakers", "Shoes", "Footwear", "Sneakers"],
    "Dress": ["Dress", "Gown", "Frock", "Dress"],
    "Skirt": ["Skirt", "Skirts", "Skirt"],
    "Jacket": ["Jacket", "Coat", "Outerwear", "Jacket"],
    "Hoodie": ["Hoodie", "Hoodie"],
    "Laptop": ["Laptop", "Laptop","Computer"],
    "Smartphone": ["Smartphone", "Phone", "Mobile", "Smartphone"],
    "Tablet": ["Tablet", "Tablet"],
    "Headphones": ["Headphones", "Earphones", "Headphones"],
    "TV": ["TV", "Television", "TV"],
    "Camera": ["Camera", "Camera"],
    "Smartwatch": ["Smartwatch", "Watch", "Smartwatch"],
    "Bluetooth Speaker": ["Bluetooth Speaker", "Speaker", "Bluetooth Speaker"]
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    const lowercasedSearchQuery = searchQuery.toLowerCase();

    // Calculate Jaccard similarity and prefix match between the search query and each synonym map entry
    let maxSimilarity = -1;
    let bestMatch = null;

    for (const key in synonymMap) {
      const lowercasedSynonyms = synonymMap[key].map(word => word.toLowerCase());
      const intersection = new Set(lowercasedSynonyms.filter(word => lowercasedSearchQuery.includes(word)));
      const union = new Set([...lowercasedSearchQuery.split(" "), ...lowercasedSynonyms]);
      const similarity = intersection.size / union.size;

      // Calculate prefix match
      const prefixMatch = (
        key.toLowerCase().startsWith(lowercasedSearchQuery) ||
        lowercasedSynonyms.some(word => word.startsWith(lowercasedSearchQuery))
      ) ? 1 : 0;
      
      //print all the words it is checking:
      console.log(lowercasedSynonyms);

      // Combine Jaccard similarity and prefix match (you can adjust weights)
      const combinedScore = 0.7 * similarity + 0.3 * prefixMatch;

      if (combinedScore > maxSimilarity) {
        maxSimilarity = combinedScore;
        bestMatch = key;
      }
    }
    console.log("maxSimilarity:", maxSimilarity);
    console.log("bestMatch:", bestMatch);
    // If a good match is found, use it as the searched word
    const searchedWord = maxSimilarity === 0 ? 'Suggestion: Either the product is not available or Check Product Spelling' : (bestMatch || lowercasedSearchQuery);

    // Set the suggestion state for rendering on the webpage
    setSuggestion(searchedWord);

    // Print the mapped search query
    console.log("Mapped Search Query:", searchedWord);

    event.preventDefault();
    onSearch(searchedWord);
  };

  return (
    <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
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
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
};

export default SearchBar;
