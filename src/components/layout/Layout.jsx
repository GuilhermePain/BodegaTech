import React from 'react'
import styles from './Layout.module.css';
import Header from '../header/Header';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
        <main className={styles.content}>
            {children}
        </main>
    </div>
  );
}

export default Layout;