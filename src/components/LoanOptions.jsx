import React from 'react';
import styles from '../styles/LoanOptions.module.css';

function LoanOptions() {
  return (
    <section className={styles['loan-section']}>
      <div>
        Do you want to apply for a loan?
      </div>
      <div>
        Loan conditions
      </div>
      <div>
        Help
      </div>
    </section>
  );
}

export default LoanOptions;