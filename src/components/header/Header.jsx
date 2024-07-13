import React from 'react'
import styles from '../../assets/styles/Header.module.css';

const Header = () => {
  return (
    <>
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1>BodegaTech</h1>
                <div>
                    <button>Entrar</button>
                    <button>Registrar</button>
                </div>
            </nav>
        </header>
    </>
  );
}

export default Header;