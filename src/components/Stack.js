import React from 'react';

import javasc from '../images/js.png';
import ts from '../images/ts.webp';
import html from '../images/html.png';
import css from '../images/css.png';
import redux from '../images/redux.svg';
import vue from '../images/vue.png';
import next from '../images/next.png';
import nuxt from '../images/nuxt.png';
import electron from '../images/electron.png';
import webpack from '../images/webpack.png';
import sass from '../images/sass.png';
import bulma from '../images/bulma.png';
import node from '../images/node.svg';
import python from '../images/python.png';
import mysql from '../images/mysql.png';
import cypress from '../images/cypress.webp';
import jasmine from '../images/jasmine.svg';
import jest from '../images/jest.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

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
  bulma: 'https://bulma.io',
  node: 'https://nodejs.org',
  python: 'https://python.org',
  mysql: 'https://mysql.com',
  cypress: 'https://cypress.io',
  jasmine: 'https://jasmine.github.io',
  jest: 'https://jestjs.io',
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
            <img title="JavaScript" className="stack-img js" src={javasc} />
          </li>
          <li>
            <img title="TypeScript" className="stack-img js" src={ts} />
          </li>
          <li>
            <img title="HTML" className="stack-img" src={html} />
          </li>
          <li>
            <img title="CSS" className="stack-img css" src={css} />
          </li>
        </ul>
        <ul>
          <li>
            <a href={urls.react} target="_blank">
              <img title="React" className="stack-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
            </a>
          </li>
          <li>
            <a href={urls.reactN} target="_blank">
              <img title="React Native" className="stack-img native" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
            </a>
          </li>
          <li>
            <a href={urls.vue} target="_blank">
              <img title="Vue" className="stack-img vue" src={vue} />
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
            <a href={urls.electron} target="_blank">
              <img title="Electron" className="stack-img" src={electron} />
            </a>
          </li>
          <li>
            <a href={urls.next} target="_blank">
              <img title="Next" className="stack-img css github next" src={next} />
            </a>
          </li>
          <li>
            <a href={urls.nuxt} target="_blank">
              <img title="Nuxt" className="stack-img" src={nuxt} />
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
              <img title="SASS" className="stack-img" src={sass} />
            </a>
          </li>
          <li>
            <a href={urls.bulma} target="_blank">
              <img title="Bulma" className="stack-img jasmine github next" src={bulma} />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={urls.cypress} target="_blank">
              <img title="Cypress" className="stack-img jasmine github" src={cypress} />
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
        <ul>
          <li>
            <a href={urls.node}>
              <img title="NodeJS" className="stack-img css" src={node} />
            </a>
          </li>
          <li>
            <a href={urls.python}>
              <img title="Python" className="stack-img" src={python} />
            </a>
          </li>
          <li>
            <a href={urls.mysql}>
              <img title="MySQL" className="stack-img css" src={mysql} />
            </a>
          </li>
        </ul>
        <button className="tech-chev" onClick={handleClick}><span>&#x27EA;</span></button>
      </div>
      <h5 className="title t6">Where to find me</h5>
      <div className="stack">
        <ul>
          <li>
            <a href={urls.github}>
              <img title="GitHub" className="stack-img github" src={github} />
            </a>
          </li>
          <li>
            <a href={urls.linkedin}>
              <img title="LinkedIn" className="stack-img" src={linkedin} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Stack;
