import Link from 'next/link';
import React, { Component } from 'react';
import style from './Close.scss';


class Close extends Component {
  render() {
    return (
      <Link prefetch href="/">
        <div className={style.close}>
          <span>✖</span>
        </div>
      </Link>
    );
  }
}

export default Close;