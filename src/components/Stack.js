import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ts from '../images/ts.webp';
import redux from '../images/redux.svg';
import next from '../images/next.png';
import nuxt from '../images/nuxt.png';
import electron from '../images/electron.png';
import webpack from '../images/webpack.png';
import less from '../images/less.png';
import bulma from '../images/bulma.png';
import mysql from '../images/mysql.png';
import cypress from '../images/cypress.webp';
import jasmine from '../images/jasmine.svg';
import jest from '../images/jest.png';
import jquery from '../images/jquery.png';
import backbone from '../images/backbone.png';
import ko from '../images/ko-logo.png';
import flutter from '../images/flutter.png';

const urls = {
  react: 'https://reactjs.org',
  reactN: 'https://reactnative.dev',
  redux: 'https://redux.js.org',
  vue: 'https://vuejs.org',
  next: 'https://nextjs.org',
  nuxt: 'https://nuxtjs.org',
  electron: 'https://electronjs.org',
  webpack: 'https://webpack.js.org',
  sass: 'https://sass-lang.com',
  less: 'http://lesscss.org',
  bulma: 'https://bulma.io',
  node: 'https://nodejs.org',
  python: 'https://python.org',
  java: 'https://java.com',
  mysql: 'https://mysql.com',
  cypress: 'https://cypress.io',
  jasmine: 'https://jasmine.github.io',
  jest: 'https://jestjs.io',
  jquery: 'https://jquery.com',
  backbone: 'https://backbonejs.org',
  knockout: 'https://knockoutjs.com',
  flutter: 'https://flutter.dev',
  github: 'https://github.com/radufarcas10',
  linkedin: 'https://linkedin.com/in/radu-farcas/'
}

function Stack() {
  const handleClick = () => {
    const techs = document.getElementById('techs');
    if (techs.classList.contains('closed')) {
      techs.classList.remove('closed');
      techs.classList.add('open');
    } else {
      techs.classList.remove('open');
      techs.classList.add('closed');
    }
  }
  
  return (
    <div className="tech">
      <h5 className="title t6">I've worked with</h5>
      <div id="techs" className="stack closed">
        <ul>
          <li>
            <FontAwesomeIcon icon={['fab', 'js']} className="stack-img" />
          </li>
          <li>
            <FontAwesomeIcon icon={['fab', 'html5']} className="stack-img" />
          </li>
          <li>
            <FontAwesomeIcon icon={['fab', 'css3-alt']} className="stack-img" />
          </li>
          <li>
            <img title="TypeScript" className="stack-img js" src={ts} />
          </li>
        </ul>
        <ul>
          <li>
            <a href={urls.react} target="_blank">
              <FontAwesomeIcon icon={['fab', 'react']} className="stack-img" />
            </a>
          </li>
          <li>
            <a href={urls.reactN} target="_blank">
              <FontAwesomeIcon icon={['fab', 'react']} className="stack-img native" />
            </a>
          </li>
          <li>
            <a href={urls.vue} target="_blank">
              <FontAwesomeIcon icon={['fab', 'vuejs']} className="stack-img" />
            </a>
          </li>
          <li>
            <a href={urls.redux} target="_blank">
              <img title="Redux" className="stack-img redux" src={redux} />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={urls.webpack} target="_blank">
              <img title="Webpack" className="stack-img" src={webpack} />
            </a>
          </li>
          <li>
            <a href={urls.sass} target="_blank">
              <FontAwesomeIcon icon={['fab', 'sass']} className="stack-img" />
            </a>
          </li>
          <li>
            <a href={urls.less} target="_blank">
              <img title="Less" className="stack-img electron" src={less} />
            </a>
          </li>
          <li>
            <a href={urls.bulma} target="_blank">
              <img title="Bulma" className="stack-img jasmine w-bg next" src={bulma} />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={urls.jquery} target="_blank">
              <img title="jQuery" className="stack-img w-bg" src={jquery} />
            </a>
          </li>
          <li>
            <a href={urls.backbone} target="_blank">
              <img title="Backbone" className="stack-img w-bg backbone next" src={backbone} />
            </a>
          </li>
          <li>
            <a href={urls.knockout} target="_blank">
              <img title="Knockout" className="stack-img jasmine next" src={ko} />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={urls.cypress} target="_blank">
              <img title="Cypress" className="stack-img jasmine w-bg" src={cypress} />
            </a>
          </li>
          <li>
            <a href={urls.jasmine} target="_blank">
              <img title="Jasmine" className="stack-img jasmine" src={jasmine} />
            </a>
          </li>
          <li>
            <a href={urls.jest} target="_blank">
              <img title="Jest" className="stack-img" src={jest} />
            </a>
          </li>
        </ul>
        <button className="tech-chev" onClick={handleClick}><span>&#x27EA;</span></button>
      </div>
      <h5 className="title t7">I played around with</h5>
      <div className="stack">
        <ul>
          <li>
            <a href={urls.electron} target="_blank">
              <img title="Electron" className="stack-img" src={electron} />
            </a>
          </li>
          <li>
            <a href={urls.next} target="_blank">
              <img title="Next" className="stack-img css w-bg next" src={next} />
            </a>
          </li>
          <li>
            <a href={urls.nuxt} target="_blank">
              <img title="Nuxt" className="stack-img" src={nuxt} />
            </a>
          </li>
          <li>
            <a href={urls.flutter} target="_blank">
              <img title="Flutter" className="stack-img flutter" src={flutter} />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={urls.node}>
              <FontAwesomeIcon icon={['fab', 'node']} className="stack-img" />
            </a>
          </li>
          <li>
            <a href={urls.python}>
              <FontAwesomeIcon icon={['fab', 'python']} className="stack-img" />
            </a>
          </li>
          <li>
            <a href={urls.java}>
              <FontAwesomeIcon icon={['fab', 'java']} className="stack-img" />
            </a>
          </li>
          <li>
            <a href={urls.mysql}>
              <img title="MySQL" className="stack-img css" src={mysql} />
            </a>
          </li>
        </ul>
      </div>
      <h5 className="title t6">Where to find me</h5>
      <div className="stack">
        <ul>
          <li>
            <a href={urls.github}>
              <FontAwesomeIcon icon={['fab', 'github']} className="stack-img" />
            </a>
          </li>
          <li>
            <a href={urls.linkedin}>
              <FontAwesomeIcon icon={['fab', 'linkedin']} className="stack-img" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Stack;
