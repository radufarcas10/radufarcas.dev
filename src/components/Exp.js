import React from 'react';
import Item from './Item';

function Experience(props) {
  const data = props.data;

  return (
    <div className="column">
      <Item data={data.title} className="t2" />
      <p className="desc d2">
        <span>{data.desc.interval}</span>
        <span>&#8594;</span>
        <span>{data.desc.job}</span>
        <a target="_blank" href={data.desc.url}>{data.desc.company}</a>
      </p>
    </div>
  );
}

export default Experience;
