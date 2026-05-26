import { Link } from "react-router-dom"
import logo from '../assets/svg/logo.svg'
import { Search } from "@geist-ui/icons"
import { useEffect, useState } from "react"

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 64)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`header-main ${isScrolled ? 'header-main-scrolled' : ''}`}>
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
