import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

function LandingPage() {
  return (
    <Layout>
      <main>
        <aside>
          <h1>BodegaTech</h1>
          <h2>Simplifique a Gestão das Contas de Seus Clientes!</h2>
          <Link to="/login" >
            <button>Começar!</button>
          </Link>
        </aside>
      </main>
    </Layout>
  )
}

export default LandingPage;