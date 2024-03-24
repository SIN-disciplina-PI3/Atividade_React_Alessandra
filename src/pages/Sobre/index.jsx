import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from './sobre.module.css'
import { Link } from 'react-router-dom';


function Sobre(){
    return(
        <>
         <Header />
        <section className={styles.Sobre}>
            <div className= "informacao2"> 
                <div ClassName= "imagemPerfil">
                    <img className="foto" src='/alessandra.png' alt='Foto Alessandra' />
                </div>
            <div className= "texto3">
                <h1>Alessandra Mendes</h1>
                <h2>Sistemas para Internet</h2>
                <br></br>
                <p> Óla! Meu nome é Alessandra, mas muitos me chamam por Ale. Tenho 21 anos, atualmente sou estudante de Sitemas para Internt na UNICAP. 
                    Também sou Residente Digital na empresa Oi, na qual exerço a função de auxíliar na arquitetura de soluções e gestão de projetos.</p>
                <br></br>
                <p>Amo ouvir músicas, ler, assistir filmes e séries.</p>
            </div>
            </div>
                <div className="icon">
                <Link to="https://github.com/AlessandraMendes02"> <img src="/Github icon.png" alt="Imagem Github" /></Link>
                <Link to="https://www.linkedin.com/in/alessandra-mendes02"> <img src="Linkedin icon.png" alt="Imagem Linkedin" /></Link>
                </div>
           
        </section> 
        <Footer />
        </>
    )
}

export default Sobre