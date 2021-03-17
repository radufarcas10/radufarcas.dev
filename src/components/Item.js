import React from 'react';

function Item(props) {
  const data = props.data;

  return (
      <h5 className={`title ${props.className}`}>{data}</h5>
  );
}

export default Item;
