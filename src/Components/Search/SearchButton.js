import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';

export function SearchButton({ searchexpanded, onClick }) {

  return (
    <div>
      <FloatingActionButton
        backgroundColor={'#512da8'}
        onMouseDown={onClick}
        className="search-button"
      >
        <FontIcon className="material-icons">
          {!searchexpanded ? 'search' : 'clear'}
        </FontIcon>
      </FloatingActionButton>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .searchBarMain i.clearSearchBarField:hover {
          cursor: pointer;
        }
      `,
        }}
      />
    </div>
  );
}
