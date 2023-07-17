import React from 'react';
import styles from '../styles/Header.module.css';
import {Link} from 'react-router-dom'

function Header({headerLink, pageName}) {
  return (
    <header className={styles['header-container']}>
      <p>{pageName}</p>
      <Link to={`/${headerLink.toLowerCase()}`} >
        {headerLink}
      </Link>
    </header>
  );
}

export default Header;