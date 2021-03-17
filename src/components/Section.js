import React from 'react';
import About from './About';
import Exp from './Exp';
import Edu from './Edu';
import Stack from './Stack';
import * as data from '../data/aboutMe';
import renderStack from '../utils/util';

function Section() {
  let ww = window.innerWidth < 412;
  return (
    <section>
      <About data={data.about} className={['t1', 'd1']} />
      <Exp data={data.experience} />
      <Edu data={data.education} />
      <About data={data.hobbies} className={['t4', 'd5']} />
      <About data={data.others} className={['t5', 'd6']} />
      {renderStack(<Stack />, ww)}
    </section>
  );
};

export default Section;
