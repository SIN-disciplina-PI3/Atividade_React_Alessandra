import { Link } from 'react-router-dom';
import styles from './header.module.css'

function Header(){
    return(
        <header className={styles.header}>
            <Link to="/">
                <span>Projeto React</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/ods">Ods</Link>
                <Link to="/sobre">Sobre mim</Link>
            </nav>
        </header>
    )
}
export default Header