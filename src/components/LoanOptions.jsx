import React from 'react';
import styles from '../styles/LoanOptions.module.css';
import PropTypes from 'prop-types';

function LoanOptions({chat, setChat, setEnableLoan}) {

  const handleApplyLoan = () => {
    const response = {
      user: 'bot',
      info: 'If you need cash, a personal loan may be a good option. Personal loans are borrowed money that can be used for large purchases, debt consolidation, emergency expenses and much more. These loans are paid back in monthly installments over the course of a few months or upwards of a few years.',
      message: 'The top 9 reasons for personal loans',
      link: 'https://www.bankrate.com/loans/personal-loans/top-reasons-to-apply-for-personal-loan/',
    };

    setChat([...chat, response]);
    setEnableLoan(false);
  };

  const handleLoanConditions = () => {
    const response = {
      user: 'bot',
      info: 'Loan terms refer to the terms and conditions involved when borrowing money. This can include the loan’s repayment period, the interest rate and fees associated with the loan, penalty fees borrowers might be charged, and any other special conditions that may apply.',
      message: 'Loans Terms: Specific Terms Defined & How to Negotiate Them',
      link: 'https://www.investopedia.com/loan-terms-5075341#:~:text=Loan%20terms%20refer%20to%20the,special%20conditions%20that%20may%20apply.',
    };

    setChat([...chat, response]);
    setEnableLoan(false);
  };

  const handleHelp = () => {
    const response = {
      user: 'bot',
      info: 'Send us an e-mail so we can help you.',
      message: 'help@email.com',
      link: 'https://gmail.com',
    };

    setChat([...chat, response]);
    setEnableLoan(false);
  };

  return (
    <section className={styles['loan-section']}>
      <div onClick={handleApplyLoan}>
        Do you want to apply for a loan?
      </div>
      <div onClick={handleLoanConditions}>
        Loan conditions
      </div>
      <div onClick={handleHelp}>
        Help
      </div>
    </section>
  );
}

LoanOptions.propTypes = {
  chat: PropTypes.array,
  setChat: PropTypes.func,
  setEnableLoan: PropTypes.func,
}.isRequired;

export default LoanOptions;