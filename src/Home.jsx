import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login" >Começar</Link>
    </div>
  )
}

export default Home
