import React from 'react';
import '../styles/normalize.scss';
import '../styles/global.scss';
import '../styles/fonts.scss';

function _global(props) {
  return <div>{props.children}</div>;
}

export default _global;