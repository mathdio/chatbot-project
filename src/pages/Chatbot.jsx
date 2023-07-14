import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Chatbot.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import loadingIcon from '../images/loading-icon.jpg';
import LoanOptions from '../components/LoanOptions';

const startTriggers = ['Hello,', 'Good,', 'I want'];

function Chatbot() {
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([]);
  const [started, setStarted] = useState(false);
  const [sentUser, setSentUser] = useState(false);
  const [username, setUsername] = useState('');
  const [sentPassword, setSentPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [enableLoan, setEnableLoan] = useState(false);

  const handleStart = () => {
    const lastResponse = chat[chat.length - 1];
    const hasTrigger = startTriggers.some((trigger) => lastResponse.message.toLowerCase().includes(trigger.toLowerCase()));
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
      const response = {
        user: 'bot',
        message: 'All right! How can we help you?',
      };
      setChat([...chat, response]);

      
    }
  };

  const handleLoanOptions = () => {
    const lastResponse = chat[chat.length - 1];
    if (lastResponse.user === 'customer') {
      const hasLoanTerm = lastResponse.message.toLowerCase().includes('loan');
      if (hasLoanTerm) {
        setEnableLoan(true);
        const response = {
          user: 'bot',
          message: 'Are you seeking some info about loans? Here some options that can help you.',
        };
        setChat([...chat, response]);
      }
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
    } else if (sentPassword) {
      setLoading(true);
      handleLoanOptions();
      setLoading(false);
    }

    ref.current?.scrollIntoView({behavior: 'smooth'});
  }, [chat]);

  useEffect(() => {
    const localStorageUser = {
      username,
      password,
    };
    localStorage.setItem('user', JSON.stringify(localStorageUser));
  }, [password]);

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className={styles['main-container']}>
      <Header />
      <div className={styles['chat-container']}>
        {chat.map((response, index) => {
          if (response.link) {
            return (
              <p key={index} className={styles[response.user]}>
                {response.info}
                <a href={response.link} >
                  {response.message.toUpperCase()}
                </a>
              </p>
            );
          } else {
            return (
              <p key={index} className={styles[response.user]}>
                {response.message}
              </p>
            );
          }
        })}
        {loading && (
          <img className={styles['loading-icon']} src={loadingIcon} />
        )}
        {enableLoan && <LoanOptions chat={chat} setChat={setChat} setEnableLoan={setEnableLoan} />}
      </div>
      <hr ref={ref} />
      <Footer chat={chat} setChat={setChat} />
    </div>
  );
}

export default Chatbot;