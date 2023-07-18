import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Chatbot.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import loadingIcon from '../images/loading-icon.jpg';
import LoanOptions from '../components/LoanOptions';
import fetchUser from '../utils/fetchUser';

const startTriggers = ['Hello,', 'Good,', 'I want'];

function Chatbot() {
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([]);
  const [started, setStarted] = useState(false);
  const [sentUser, setSentUser] = useState(false);
  const [username, setUsername] = useState('');
  const [sentPassword, setSentPassword] = useState(false);
  const [enableLoan, setEnableLoan] = useState(false);
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const convertCsv = async () => {
    const heading = ['user', 'message', 'date'];
    const convertInRows = chat.map((response) => {
      if (response.link) {
        return [response.user, `${response.message} ${response.info} ${response.link}`, response.date];
      } else {
        return [response.user, response.message, response.date];
      }
    });

    convertInRows.splice(0,0, heading);
    let csvContent = 'data:text/csv;charset=utf-8,';
    convertInRows.forEach((rowArray) => {
      const row = rowArray.join(',');
      csvContent += row + '\r\n';
    });

    const date = chat[chat.length - 1].date;

    await fetch(
      'http://localhost:3001/conversations/',
      {
        method: 'POST',
        body: JSON.stringify({csvContent, id, date}),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
        }
      },
    );
  };

  const handleStart = () => {
    const lastResponse = chat[chat.length - 1];
    const hasTrigger = startTriggers.some((trigger) => lastResponse.message.toLowerCase().includes(trigger.toLowerCase()));
    if (hasTrigger) {
      setStarted(true);
      const response = {
        user: 'bot',
        message: 'Send your username to continue',
        date: new Date().toISOString().slice(0, 19).replace('T', ' '),
      };
      setChat([...chat, response]);
    }
  };

  const handleUser = async () => {
    const lastResponse = chat[chat.length - 1];
    if (lastResponse.user === 'customer') {
      setUsername(lastResponse.message);
      setSentUser(true);
      const response = {
        user: 'bot',
        message: 'Now send your password',
        date: new Date().toISOString().slice(0, 19).replace('T', ' '),
      };
      setChat([...chat, response]);
    }
  };

  useEffect(() => {
    if (name && name.length > 0) {
      localStorage.setItem('user', JSON.stringify({id, name}));
      setSentPassword(true);
      const response = {
        user: 'bot',
        message: `All right, ${name}! How can we help you?`,
        date: new Date().toISOString().slice(0, 19).replace('T', ' '),
      };
      setChat([...chat, response]);
    } else if (name === null) {
      setSentUser(false);
      const response = {
        user: 'bot',
        message: 'Username or passwords invalids. Try again.',
        date: new Date().toISOString().slice(0, 19).replace('T', ' '),
      };
      setChat([...chat, response]);
    }
  }, [name]);

  const handlePassword = () => {
    const lastResponse = chat[chat.length - 1];
    if (lastResponse.user === 'customer') {
      fetchUser(username, lastResponse.message, setName, setId);
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
          date: new Date().toISOString().slice(0, 19).replace('T', ' '),
        };
        setChat([...chat, response]);
      }
    }
  };

  const handleGoodbye = () => {
    const lastResponse = chat[chat.length - 1];
    if (lastResponse.user === 'customer') {
      const hasGoodbyeTerm = lastResponse.message.toLowerCase().includes('goodbye');
      if (hasGoodbyeTerm) {
        convertCsv();
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
      handleGoodbye();
      setLoading(false);
    }

    ref.current?.scrollIntoView({behavior: 'smooth'});
  }, [chat]);

  return (
    <div className={styles['main-container']}>
      <Header headerLink='History' pageName='Chatbot' />
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
          <img className={styles['loading-icon']} src={loadingIcon} alt="" />
        )}
        {enableLoan && <LoanOptions chat={chat} setChat={setChat} setEnableLoan={setEnableLoan} />}
      </div>
      <hr ref={ref} />
      <Footer chat={chat} setChat={setChat} />
    </div>
  );
}

export default Chatbot;