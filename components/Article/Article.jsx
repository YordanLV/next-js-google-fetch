import React, { Component } from 'react';
import MarkDown from 'react-markdown';

import style from './Article.scss';


class Article extends Component {

  render() {
    return (
      <article className={style.article}>
        <div className={style.skewedBg}>
          <div className={style.skewedBgContent}>
            <h1>{this.props.title}</h1>
            <MarkDown source={this.props.data}/>
          </div>
        </div>
      </article>
    );
  }
}

export default Article;