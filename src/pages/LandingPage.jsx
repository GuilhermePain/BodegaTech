import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ImgLandingPage from '../assets/img/undraw_shopping_app_flsj.png';
import styles from './../assets/styles/LandingPage.module.css';
import Button from '../components/Button';

function LandingPage() {
  return (
    <Layout>
      <section className={styles.startSection}>
        <aside className={styles.leftSide}>
          <div className={styles.title}>
            <h1>BodegaTech</h1>
            <h2>
              <span>Simplifique</span> a Gestão <br />das <span>Contas</span> de Seus Clientes!
            </h2>
          </div>
          <Link to="/register" >
            <Button text='Começar!' color='primaryButton' typeButton='ctaButton' />
          </Link>
        </aside>
        <aside className={styles.rightSide}>
          <img src={ImgLandingPage} alt="Imagem da landing page" />
        </aside>
      </section>
    </Layout>
  )
}

export default LandingPage;