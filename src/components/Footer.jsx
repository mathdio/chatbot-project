import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
  const [inputText, setInputText] = useState('');

  const handleClick = () => {
    console.log('clicou');
  };

  const handleKeyDown = (key) => {
    if (key === 'Enter') {
      handleClick();
    }
  };

  return (
    <footer className={styles['footer-container']}>
      <input
        type="text"
        value={inputText}
        onChange={ ({target}) => setInputText(target.value) }
        onKeyDown={(event) => handleKeyDown(event.key) }
      />
      <button
        type='button'
        onClick={handleClick}
      >
        send
      </button>
    </footer>
  );
}

export default Footer;