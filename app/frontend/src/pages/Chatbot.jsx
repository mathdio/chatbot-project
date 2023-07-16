import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Chatbot.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import loadingIcon from '../images/loading-icon.jpg';
import LoanOptions from '../components/LoanOptions';
import fetchUsername from '../utils/fetchUsername';

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
  const [name, setName] = useState('');

  const convertCsv = () => {
    const heading = ['user', 'message'];
    const convertInRows = chat.map((response) => {
      if (response.link) {
        return [response.user, `${response.message} ${response.info} ${response.link}`]
      } else {
        return [response.user, response.message]
      }
    })

    convertInRows.splice(0,0, heading);
    let csvContent = "data:text/csv;charset=utf-8,";
    convertInRows.forEach((rowArray) => {
      const row = rowArray.join(",")
      csvContent += row + '\r\n'
    })

    console.log(csvContent);
  }

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

  const handleUser = async () => {
    const lastResponse = chat[chat.length - 1];
    if (lastResponse.user === 'customer') {
      setUsername(lastResponse.message);
      setSentUser(true);
      const response = {
        user: 'bot',
        message: `Now send your password`,
      };
      setChat([...chat, response]);
    }
  };

  useEffect(() => {
    if (name && name.length > 0) {
      setSentPassword(true)
      const response = {
        user: 'bot',
        message: `All right, ${name}! How can we help you?`,
      };
      setChat([...chat, response]);
    } else if (name === null) {
      setSentUser(false);
      const response = {
        user: 'bot',
        message: `Username or passwords invalids. Try again.`,
      };
      setChat([...chat, response]);
    }
  }, [name]);

  const handlePassword = () => {
    const lastResponse = chat[chat.length - 1];
    if (lastResponse.user === 'customer') {
      fetchUsername(username, lastResponse.message, setName);
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

  const handleGoodbye = () => {
    const lastResponse = chat[chat.length - 1];
    if (lastResponse.user === 'customer') {
      const hasGoodbyeTerm = lastResponse.message.toLowerCase().includes('goodbye');
      if (hasGoodbyeTerm) {
        convertCsv();
      }
    }
  }
  
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