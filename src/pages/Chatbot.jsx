import React from 'react';
import styles from '../styles/Chatbot.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Chatbot() {
  return (
    <div className={styles['main-container']}>
      <Header />
      <h1>Chatbot page</h1>
      <Footer />
    </div>
  );
}

export default Chatbot;