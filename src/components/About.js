import React from 'react';
import Item from 'components/Item';

function About(props) {
  const data = props.data;

  return (
    <div className="column">
      <Item data={data.title} className={props.className[0]} />
      <p className={`desc ${props.className[1]}`}>{data.desc}</p>
    </div>
  );
}

export default About;
