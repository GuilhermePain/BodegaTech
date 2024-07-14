import React from 'react'
import styles from '../../assets/styles/Header.module.css';
import LogoBodegaTech from './../../assets/img/logoBodegaTech.svg';
import Button from '../button/Button';

const Header = () => {
  return (
    <>
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                  <img src={LogoBodegaTech} alt="Logo BodegaTech" />
                  <h1>BodegaTech</h1>
                </div>
                <div className={styles.btnArea}>
                    <Button text="Entrar" color='secondaryButton' />
                    <Button text="Registrar" color='primaryButton' />
                </div>
            </nav>
        </header>
    </>
  );
}

export default Header;