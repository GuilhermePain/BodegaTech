import React, { useState } from 'react';
import Button from '../Button';
import Card from '../Card';
import ImgSupermercado from '../../assets/images/undraw_Home_settings_re_pkya.png';
import imgCliente from '../../assets/images/undraw_online_groceries_a02y (1).png';
import styles from '../../assets/styles/UserTypeForm.module.css';

const UserTypeForm = () => {
    return (
        <div>
            <main className={styles.mainContainer}>
                <form className={styles.userTypeForm}>
                    <h1>Você é?</h1>
                    <p>Clique em uma opção para prosseguir.</p>
                    <div className={styles.cardContainer}>
                        <div>
                            <Card image={ImgSupermercado} text="Supermercado" altText="Imagem ilustrativa do supermercado." />
                        </div>
                        <div>
                            <Card image={imgCliente} text="Cliente" altText="Imagem ilustrativa do cliente."/>
                        </div>
                    </div>
                    <Button text="Próximo" />
                </form>
            </main>
        </div>
    );
}

export default UserTypeForm;