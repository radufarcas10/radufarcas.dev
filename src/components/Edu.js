import React from 'react';
import Item from 'components/Item';

function Education(props) {
  const data = props.data;

  const schls = data.desc.map((school, index) => {
    return (
      <p className={`desc d${3+index}`} key={school.id}>
        <span>{school.interval}</span>
        <span>&#8594;</span>
        <span>{school.major}</span>
        <span>{school.school}</span>
      </p>
    )
  });

  return (
    <div className="column">
      <Item data={data.title} className="t3" />
      { schls }
    </div>
  );
}

export default Education;
