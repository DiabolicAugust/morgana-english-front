'use client';

import { useEffect, useState } from 'react';
import styles from './topic-sets.module.css';
import axios from 'axios';

export default function TopicSets() {
  const [topicSet, setTopicSet] = useState();

  useEffect(() => {
    const topicStats = async () => {
      try {
        const response = await axios.get(
          'https://morgana-english-admin.onrender.com/statistics/topicSets'
        );
        console.log(response);
        const data = response.data;
        setTopicSet(data);
      } catch (error) {
        console.error('Failed to fetch data: ', error);
      }
    };
    topicStats(); // You need to call the topicStats function inside useEffect.
  }, []);

  return (
    <div>{topicSet != null ? <div>Topic Sets</div> : <div>Waiting</div>} </div>
  );
}
