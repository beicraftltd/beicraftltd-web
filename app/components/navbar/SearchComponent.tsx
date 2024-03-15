import React, { useState } from 'react';

function SearchComponent({ onSearch }: { onSearch: (searchTerm: string) => void }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Pass the search term to the parent component for further processing
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Search</button>
    </form>
  );
}

export default SearchComponent;
