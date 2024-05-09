'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Menu from './menu';
import { useState } from 'react';
import { menu } from './data';

export default function Home() {
  const [screen, setScreenState] = useState(0);

  function changeScreen(index: number) {
    setScreenState(index);
  }

  return (
    <main className={styles.main}>
      <div className={styles.menu}>
        {<Menu menu={menu} changeScreen={changeScreen} />}
      </div>
      <div className={styles.screen}>{menu[screen].component}</div>
    </main>
  );
}
