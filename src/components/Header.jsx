import { Link } from "react-router-dom"
import logo from '../assets/svg/logo.svg'
import { Search } from "@geist-ui/icons"

const Header = () => {
    return (
        <header className="header-main">
            <section className="header-left">
                <Link><img src={logo} /></Link>
                <nav>
                    <ul>
                        <Link>inicio</Link>
                        <Link>dados</Link>
                        <Link>integrações</Link>
                        <Link>tópicos</Link>
                        <Link>veiculos</Link>
                        <Link>empresa</Link>
                        <Link>ajuda</Link>
                    </ul>
                </nav>
            </section>

            <section className="header-right">
                <article className="header-search">
                    <Search size={16} />
                    <input type="text" placeholder="Pesquisar..." />
                </article>
            </section>
        </header>
    )
}

export default Header
