import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';

export function InfoButton({ onClick }) {

  return (
    <div>
      <FloatingActionButton
        backgroundColor={'#512da8'}
        onMouseDown={onClick}
        className="info-button"
      >
        <FontIcon className="material-icons">
          info_outline
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
