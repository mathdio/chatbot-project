import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Footer.module.css';

function Footer({chat, setChat}) {
  const [inputText, setInputText] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(true);

  useEffect(() => {
    if (inputText.trim().length > 0) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [inputText]);

  const handleClick = () => {
    const response = {
      user: 'customer',
      message: inputText.trim(),
      date: new Date().toISOString().slice(0, 19).replace('T', ' '),
    };
    setChat([...chat, response]);
    setInputText('');
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
        className={styles["input"]}
      />
      <button
        type='button'
        onClick={handleClick}
        disabled={disabledBtn}
        className={styles["button"]}
      >
        send
      </button>
    </footer>
  );
}

Footer.propTypes = {
  chat: PropTypes.array,
  setChat: PropTypes.func,
}.isRequired;

export default Footer;