import React from 'react';
import Section from 'components/Section';
import { checkTitle, isOnCv, goBack } from 'utils/route';

function CV() {
  checkTitle();
  document.getElementById('me').classList.add('unset');
  return (
    <main className="container column cv">
      <nav className="row nav">
        <button onClick={goBack} className="menu"><span className="menu-arrow">&#8249;</span>&nbsp;go back</button>
      </nav>
      <div className="row cv-image">
        <div className="image">
          <div className={`cover ${isOnCv() ? 'hide' : ''}`}>
            <div className="av-body"></div>
            <div className="av-head"></div>
          </div>
        </div>
        <div className="column">
          <h1>Radu Farcas</h1>
          <h5 className="job">Front-end developer</h5>
        </div>
      </div>
      <Section />
    </main>
  )
}

export default CV;
