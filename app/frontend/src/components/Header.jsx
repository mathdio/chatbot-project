import React from 'react';
import styles from '../styles/Header.module.css';
import {Link, useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

function Header({headerLink, pageName}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/chatbot');
  };

  return (
    <header className={styles['header-container']}>
      <p className={styles['title']}>
        <img href="" className={styles['img']} />
        {pageName}
      </p>
      <Link to={`/${headerLink.toLowerCase()}`} className={styles['history']} >
        {headerLink}
      </Link>
      <button
        type="button"
        onClick={handleLogout}
        className={styles['logout-btn']}
      >
        Logout
      </button>
    </header>
  );
}

Header.propTypes = {
  headerLink: PropTypes.string,
  pageName: PropTypes.string,
}.isRequired;

export default Header;