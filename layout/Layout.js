import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from '../styles/layout.module.css'

export default function Layout({children}) {
  return (
    <div>
      <Navbar/>
        <div className={styles.childrenContainer}>
          {children}
        </div>
      <Footer />
    </div>
  )
};
