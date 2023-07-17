import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
import fetchConversations from "../utils/fetchConversations";
import styles from '../styles/History.module.css';

function History() {
  const [user, setUser] = useState(null);
  const [conversations, setConversations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetchConversations(user.id, setConversations);
    }
  }, [user]);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')))
    } else {
      navigate('/chatbot')
    }
  }, []);

  return (
    <div className={styles["main-container"]}>
      <Header headerLink='Chatbot' pageName='History'/>
        <table className={styles["table"]}>
          <thead>
            <tr className={styles["thead-tr"]}>
              <th>Conversation</th>
              <th>Date</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
              {conversations.map(({date, url}, index) => {
                const convertedDate = date.split("T")[0].split("-").reverse().join("/")
                const time = date.split("T")[1].split(".")[0]
                return (
                <tr key={index} className={styles['tbody-tr']}>
                  <td>
                    {`Conversation ${user.name} #${index + 1}`}
                  </td>
                  <td>
                    {`${convertedDate} ${time}`}
                  </td>
                  <td>
                    <a href={url.slice(19)} download={`${url.split("/")[4]}`}>
                      Download
                    </a>
                  </td>
                </tr>)})}
            </tbody>
        </table>
    </div>
  )
}

export default History