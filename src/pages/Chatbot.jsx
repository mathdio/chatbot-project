import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Chatbot.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import loadingIcon from '../images/loading-icon.jpg';

function Chatbot() {
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([]);

  const ref = useRef(null);

  useEffect(() => {
    if (chat.length > 0) setLoading(true);

    ref.current?.scrollIntoView({behavior: 'smooth'});
  }, [chat]);

  return (
    <div className={styles['main-container']}>
      <Header />
      <div className={styles['chat-container']}>
        {chat.map(({message, user}, index) => (
          <p key={index} className={styles[user]}>
            {message}
          </p>
        ))}
        {loading && (
          <img className={styles['loading-icon']} src={loadingIcon} />
        )}
        <hr ref={ref} />
      </div>
      <Footer chat={chat} setChat={setChat}/>
    </div>
  );
}

export default Chatbot;