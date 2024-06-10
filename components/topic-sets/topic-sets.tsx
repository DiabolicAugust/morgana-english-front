'use client';

import { useEffect, useState } from 'react';
import styles from './topic-sets.module.css';
import axios from 'axios';
import DataInterface from '../classes/data.interface';
import { TopicSetDocument } from 'morgana-english-shared/dist/models/topic-set.model';

export default function TopicSets() {
  const [topicSet, setTopicSet] = useState<DataInterface>();

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
    <div className={styles.main}>
      {topicSet != null ? TopicSetsContent(topicSet) : LoadingComponent()}
    </div>
  );
}

function TopicSetsContent(data: DataInterface) {
  return (
    <div>
      {data.warning && <div className={styles.warning}>{data.warning}</div>}
      <div className={styles.counters}>
        <div className={styles.overall}>
          <div>Overall topic sets:</div>
          <div className={styles.number}> {data.overall}</div>
        </div>

        <div className={styles.overall}>
          <div>Unused topics: </div>
          <div className={styles.number}> {data.unused}</div>
        </div>
      </div>
      <div>{nextTopicComponent(data.next)}</div>
    </div>
  );
}

function nextTopicComponent(next: TopicSetDocument) {
  return (
    <div>
      <div>
        {next.topic} - {next.topicTranslation}
      </div>
      <div>{next.sentence}</div>
      <div>{next.sentenceTranslation}</div>
      <div>
        <ul>
          {next.words.map((word) => (
            <li>
              {word.word} - {word.translation}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LoadingComponent() {
  return <div>Waiting</div>;
}
