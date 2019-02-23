import React, { Component } from 'react';
import MarkDown from 'react-markdown';

import style from './Section.scss';


export default class section extends Component {
  render() {
    return (
      <div className={style.section}>
        <h1>{this.props.title}</h1>
        <MarkDown source={this.props.data}/>
      </div>
    );
  }
}
