import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import { checkTitle } from 'utils/route';

function Intro() {
  checkTitle();
  document.getElementById('me').classList.remove('unset');
  setTimeout(() => {
    document.querySelector('.intro').classList.add('hide');
  }, 1400);
  return (
    <>
      <div className="intro">
        <div className="logo"></div>
      </div>
      <Header />
      <main className="container column">
        <div className="image">
          <div className="cover">
            <div className="av-body"></div>
            <div className="av-head"></div>
          </div>
        </div>
        <h5>Front-end Developer</h5>
        <Link to="/cv" className="menu">CV</Link>
      </main>
    </>
  );
}

export default Intro;
