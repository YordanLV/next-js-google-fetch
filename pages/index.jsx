import React from 'react';
import Global from './_global';
import Head from '../components/head';
import { Menu, Button, BirdBackground } from '../components/';

import style from './index.scss';
import menuStyle from '../components/Menu/Menu.scss';

export default class extends React.Component {
  render() {
    return (
      <Global>
        <BirdBackground/>
        <Head title="Home" />
        <div className={style.githubIntroText}>
          This portfolio is made with: React, Mobx, Next.js, SASS (CSS-Modules), Contentful CMS and Express.<br />
          Fork it on GitHub!
        </div>
        <Menu onLoadClass={menuStyle.isCenter} />
        <div className={style.button}>
          <Button text='resume' href='empty' />
        </div>
      </Global>
    );
  }
}
