import '../css/home.css'
import Header from "../components/Header"
import { useDate } from '../hooks/useDate'
import { Link } from "react-router-dom"
import { ArrowRight } from '@geist-ui/icons'

const Home = () => {

  const { day, month, year } = useDate()

  return (
    <main className="home-main">
      <Header />
      <div className="home-content">
        <section className="home-presentation">
          <div>
            <p>{month} {day}, {year}</p>
            <h1>Construindo a <span>Rede</span> de <span>Inteligência Planetária</span>.</h1>
            <Link>Solicitar Acesso <ArrowRight className='arrow-right' size={16}/></Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
