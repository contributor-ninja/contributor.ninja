import React from 'react';

export function Search() {

  return (
    <footer className="page-footer">
      <div className="searchBarMain">
        <i className="material-icons searchBarSearchIcon noUserSelect">
          search
        </i>
        <input
          type="text"
          name="footer-search"
          defaultValue
          id="searchBarInput"
          placeholder="Search, discover, explore..."
        />

        <i
          className="material-icons clearSearchBarField noUserSelect"
          onclick="resetInput()"
        >
          clear
        </i>
      </div>
    </footer>
  );
}
