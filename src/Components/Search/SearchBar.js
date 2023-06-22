import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-container mt-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>

      <style jsx>{`
        .search-container {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        form {
          width: 100%;
          max-width: 400px;
        }

        .input-group {
          display: flex;
        }

        input {
          flex: 1;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
        }

        .btn-primary {
          margin-left: 10px;
          padding: 10px 20px;
          background-color: #007bff;
          border: none;
          border-radius: 4px;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
