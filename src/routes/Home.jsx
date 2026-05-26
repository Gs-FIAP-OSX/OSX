import '../css/home.css'
import Header from "../components/Header"
import { useDate } from '../hooks/useDate'
import { Link } from "react-router-dom"
import { ArrowRight } from '@geist-ui/icons'

import earth from '../assets/img/earth.gif'

import partnership1 from '../assets/img/partnership/1.png'
import partnership2 from '../assets/img/partnership/2.png'
import partnership3 from '../assets/img/partnership/3.png'
import partnership4 from '../assets/img/partnership/4.png'
import partnership5 from '../assets/img/partnership/5.png'
import partnership6 from '../assets/img/partnership/6.png'
import partnership7 from '../assets/img/partnership/7.png'
import partnership8 from '../assets/img/partnership/8.png'

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
            <img src={partnership2} draggable={false} />
            <img src={partnership1} draggable={false} />
            <img src={partnership3} draggable={false} />
            <img src={partnership4} draggable={false} />
            <img src={partnership5} draggable={false} />
            <img src={partnership6} draggable={false} />
            <img src={partnership7} draggable={false} />
            <img src={partnership8} draggable={false} />
          </div>
        </section>

        <section className='home-orbit'>
          <article className='home-orbit-left'>
            <p>Em Órbita</p>
            <h1>Rastreador de Veículos</h1>
            <h2>A OSX prevê colisões orbitais antes que aconteçam. Nossa IA cruza dados de rastreamento global, valida cenários em simulações e alerta operadores para reposicionamentos estratégicos, protegendo satélites, reduzindo riscos e garantindo continuidade operacional no espaço.</h2>
          </article>
          <article className='home-orbit-right'>
            <img src={earth} draggable={false} />
          </article>
        </section>

        <section className='home-diagram'>
          <h1>Contagem regressiva</h1>
          <p>Todos os horários são aproximados.</p>
          <table>
            <thead>
              <tr>
                <th>Hora/Min/Seg</th>
                <th>Evento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>00:38:53</td>
                <td>Carregamento de LOX (oxigênio líquido) do navio em andamento</td>
              </tr>
              <tr>
                <td>00:35:00</td>
                <td>Carregamento de LOX auxiliar em andamento</td>
              </tr>
              <tr>
                <td>00:34:43</td>
                <td>Carregamento de combustível auxiliar (metano líquido) em andamento</td>
              </tr>
              <tr>
                <td>00:32:59</td>
                <td>Carga de combustível do navio em andamento</td>
              </tr>
              <tr>
                <td>00:21:30</td>
                <td>Raptor inicia o resfriamento do motor no propulsor e na nave.</td>
              </tr>
              <tr>
                <td>00:02:50</td>
                <td>Carga de propelente do foguete auxiliar concluída</td>
              </tr>
              <tr>
                <td>00:02:10</td>
                <td>Carga de propelente do navio concluída</td>
              </tr>
              <tr>
                <td>00:00:30</td>
                <td>O diretor de voo da SpaceX confirmou a autorização para o lançamento.</td>
              </tr>
              <tr>
                <td>00:00:17</td>
                <td>ativação do defletor de chamas</td>
              </tr>
              <tr>
                <td>00:00:03</td>
                <td>comando de inicialização do motor auxiliar</td>
              </tr>
              <tr>
                <td>00:00:00</td>
                <td>Emoção garantida</td>
              </tr>
            </tbody>
          </table>
          <img src="https://sxcontent9668.azureedge.us/cms-assets/assets/SPACEX_STARSHIP_INFOGRAPHIC_FLIGHT_12_DESKTOP_1_89bf5f162d.png" />
        </section>
      </div>
    </main>
  )
}

export default Home
