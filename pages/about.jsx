import React from 'react';
import Head from '../components/head';
import Global from './_global';
import { Menu, CloseMobile, Section, Loading } from '../components/';

import { observer } from 'mobx-react';
import aboutStore from '../store/aboutStore';

import style from './about.scss';
import menuStyle from '../components/Menu/Menu.scss';

class About extends React.Component {
  componentDidMount() {
    aboutStore.setData();
  }

  render() {
    return (
      <Global>
        <Head title="About" />
        <Menu onLoadClass={menuStyle.isLeft} isActive={true} aboutActive={true}/>
        <CloseMobile />
        <div className={style.skewedBg}>
          <div className={style.content}>
            <h1>
              {aboutStore.aboutDescription ? (
                <Section title={aboutStore.aboutName} data={aboutStore.aboutDescription} />
              ) : (
                <Loading />
              )}
            </h1>
          </div>
        </div>
      </Global>
    );
  }
}

export default observer(About);
