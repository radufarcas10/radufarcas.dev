import React from 'react';
import About from 'components/About';
import Exp from 'components/Exp';
import Edu from 'components/Edu';
import Stack from 'components/Stack';
import * as data from 'data/aboutMe';

function Section() {
  let ww = window.innerWidth < 412;
  return (
    <section>
      <About data={data.about} className={['t1', 'd1']} />
      <Exp data={data.experience} />
      <Edu data={data.education} />
      <About data={data.hobbies} className={['t4', 'd5']} />
      <About data={data.others} className={['t5', 'd6']} />
      <Stack />
    </section>
  );
};

export default Section;
