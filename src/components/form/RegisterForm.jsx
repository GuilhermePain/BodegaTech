import React from 'react';
import { Link } from 'react-router-dom';
import ImgRegister from '../../assets/images/undraw_Gone_shopping_re_2lau.png';
import styles from '../../assets/styles/RegisterForm.module.css';
import Button from '../Button';

const RegisterForm = () => {
  return (
    <div className={styles.mainContent}>
      <aside className={styles.leftSide}>
        <img src={ImgRegister} alt="Imagem da tela de registro." />
      </aside>
      <aside className={styles.rightSide}>
        <form className={styles.form}>
            <legend className={styles.title}>Registro</legend>
            <div className={styles.fieldsArea}>
              <label>Nome</label>
              <input type="text" className={styles.fields} />
            </div>
            <div className={styles.fieldsArea}>
              <label>Email</label>
              <input type="email" className={styles.fields} />
            </div>
            <div className={styles.fieldsArea}>
              <label>Telefone</label>
              <input type="number" className={styles.fields} />
            </div>
            <div className={styles.fieldsArea}>
              <label>Endereço</label>
              <input type="text" className={styles.fields} />
            </div>
            <div className={styles.fieldsArea}>
              <label>Senha</label>
              <input type="password" className={styles.fields} />
            </div>
            <div className={styles.fieldsArea}>
              <label>Confirmar senha</label>
              <input type="password" className={styles.fields} />
            </div>
            <div className={styles.showPassword}>
              <label>Mostrar senha</label>
              <input type="checkbox" />
            </div>
            <Button text="Registrar" typeButton='loginAndRegisterButton'>Registrar</Button>
            <p>Já tem uma conta? <Link to="/login">Entre</Link></p>
        </form>
      </aside>
    </div>
  );
};

export default RegisterForm;