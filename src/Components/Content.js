import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Column from './Column';
import {Login} from './Login';

export default function Content({isConnected, columns, loaded, isMobile}) {
  return (
    <section className="content">
      <div className="cards">
        {!isMobile && isConnected === false && <Login />}

        <div>
          <div>
            <Column columns={columns} loaded={loaded} isConnected={isConnected} isMobile={isMobile}/>
          </div>
        </div>
      </div>
    </section>
  );
}
