import React from 'react';
import style from './Loading.scss';

export default () => {
  return (
    <div>
      <img className={style.loading} src="../static/loading.svg" alt="Loading"/>
    </div>
  );
};
