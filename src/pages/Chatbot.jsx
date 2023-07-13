import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Chatbot.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import loadingIcon from '../images/loading-icon.jpg';

const startTriggers = ['Hello,', 'Goodbye,', 'Good,', 'I want'];

function Chatbot() {
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([]);
  const [started, setStarted] = useState(false);
  const [sentUser, setSentUser] = useState(false);
  const [username, setUsername] = useState('');
  const [sentPassword, setSentPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleStart = () => {
    const lastResponse = chat[chat.length - 1];
    const hasTrigger = startTriggers.some((trigger) => lastResponse.words[0] === trigger);
    if (hasTrigger) {
      setStarted(true);
      const response = {
        user: 'bot',
        message: 'Send your username to continue',
      };
      setChat([...chat, response]);
    }
  };

  const handleUser = () => {
    const lastResponse = chat[chat.length - 1];
    if (lastResponse.user === 'customer') {
      setUsername(lastResponse.message);
      setSentUser(true);
      const response = {
        user: 'bot',
        message: 'Now send your password',
      };
      setChat([...chat, response]);
    }
  };

  const handlePassword = () => {
    const lastResponse = chat[chat.length - 1];
    if (lastResponse.user === 'customer') {
      setPassword(lastResponse.message);
      setSentPassword(true);
    }
  };
  

  const ref = useRef(null);

  useEffect(() => {
    if (chat.length > 0 && !started) {
      setLoading(true);
      handleStart();
      setLoading(false);
    } else if (started && !sentUser) {
      setLoading(true);
      handleUser();
      setLoading(false);
    } else if (sentUser && !sentPassword) {
      setLoading(true);
      handlePassword();
      setLoading(false);
    }

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