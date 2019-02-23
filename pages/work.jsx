import React from 'react';

import Global from './_global';
import Head from '../components/head';
import { Menu, Article, CloseMobile, Loading } from '../components';

import articleStore from '../store/articleStore';
import { observer } from 'mobx-react';

import menuStyle from '../components/Menu/Menu.scss';

class Work extends React.Component {
  componentDidMount() {
    articleStore.setData();
  }

  render() {
    return (
      <Global>
        <Head title="Work" />
        <Menu onLoadClass={menuStyle.isRight} isActive={true} workActive={true} />
        <CloseMobile />
        {articleStore.projectData.map((projectData) => (
          <Article
            key={projectData.fields.projectName}
            title={projectData.fields.projectName}
            data={projectData.fields.projectDescription}
          />
        ))}
      </Global>
    );
  }
}

export default observer(Work);
