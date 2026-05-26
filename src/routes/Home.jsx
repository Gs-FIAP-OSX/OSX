import '../css/home.css'
import Header from "../components/Header"
import { useDate } from '../hooks/useDate'
import { Link } from "react-router-dom"
import { ArrowRight } from '@geist-ui/icons'

import partnership1 from '../assets/img/partnership/1.png'
import partnership2 from '../assets/img/partnership/2.png'
import partnership3 from '../assets/img/partnership/3.png'
import partnership4 from '../assets/img/partnership/4.png'
import partnership5 from '../assets/img/partnership/5.png'
import partnership6 from '../assets/img/partnership/6.png'

const Home = () => {

  const { day, month, year } = useDate()

  return (
    <main className="home-main">
      <Header />
      <div className="home-content">
        <section className="home-presentation">
          <div>
            <p>{month} {day}, {year}</p>
            <h1>Rede de Inteligência Planetária.</h1>
            <Link>Solicitar Acesso <ArrowRight className='arrow-right' size={16} /></Link>
          </div>
        </section>

        <section className='home-partnership'>
          <div className='home-partnership-grid'>
            <img src={partnership1} />
            <img src={partnership2} />
            <img src={partnership3} />
            <img src={partnership4} />
            <img src={partnership5} />
            <img src={partnership6} />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
