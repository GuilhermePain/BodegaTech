import React from 'react'
import styles from '../../assets/styles/Header.module.css';
import LogoBodegaTech from './../../assets/img/logoBodegaTech.svg';
import { Link } from 'react-router-dom';
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
                    <Link to='/login'>
                      <Button text="Entrar" color='secondaryButton' />
                    </Link>
                    <Link to='/register'>
                      <Button text="Registrar" color='primaryButton' />
                    </Link>
                </div>
            </nav>
        </header>
    </>
  );
}

export default Header;