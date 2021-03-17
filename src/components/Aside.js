import React from 'react';
import Stack from './Stack';
import renderStack from '../utils/util';

function Aside() {
  let ww = window.innerWidth > 411;
  return (
    <aside>
      <div className="image">
        <div className="cover">
          <div className="av-body"></div>
          <div className="av-head"></div>
        </div>
      </div>
      {renderStack(<Stack />, ww)}
    </aside>
  );
};

export default Aside;
