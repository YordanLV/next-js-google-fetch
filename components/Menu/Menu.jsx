import Link from 'next/link';
import React from 'react';

import menuStore from '../../store/components/menuStore';
import { observer } from 'mobx-react';

import cx from 'classnames';
import style from './Menu.scss';

class menu extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      menuStore.onLoadClass(this.props.onLoadClass);
    }, 100);
  }

  render() {
    const links = [ 
      {key: 1, href: '/about', label: 'About', isItemActive : this.props.aboutActive },
      {key: 2, href: '/work', label: 'Work', isItemActive : this.props.workActive},
      {key: 3, href: '/contact', label: 'Contact', isItemActive : '' },
      {key: 4, href: '/blog', label: 'Blog', isItemActive : '' },
      {key: 5, href: 'https://www.linkedin.com/in/lasonov/', label: 'LinkedIn', isItemActive : '' },
      {key: 6, href: 'https://github.com/segmentio/create-next-app', label: 'GitHub', isItemActive : ''}  
    ];
    return (
      <div
        className={cx(style.menuWrapper, menuStore.loadedClass, this.props.isActive ? style.isActive : ' ')}
      >
        <header>
          <div>
            <Link prefetch href="/">
              <a>
                <img src="../static/logo.png" height='150'/>
              </a>
            </Link>
          </div>
        </header>
        <nav>
          <ul>
            {links.map(({ key, href, label, isItemActive }) => (
              <li key={key}>
                <Link prefetch href={href}>
                  <a className={isItemActive ? style.active : ' '}><span>{label}</span></a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default observer(menu);
