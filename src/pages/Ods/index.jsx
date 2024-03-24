import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from './ods.module.css'

function Ods(){
    return(
        <>
        <Header />
            <section className={styles.ods}>
            <div className='informacao'>
                <div className='imagemOds'>
                    <img src='/ODS_10.jpg' alt='Imagem do ODS 10' />
                </div>
                <div className='texto2'>
                <h1>ODS 10: Redução das Desigualdades</h1>
                <br></br>
                <p>
                    O Objetivo de Desenvolvimento Sustentável (ODS) 10 foi estabelecido pela Organização das Nações Unidas (ONU) como parte da Agenda 2030 para o Desenvolvimento Sustentável, e tem como objetivo principal reduzir as desigualdades sociais, econômicas e políticas dentro e entre os países.
                </p>
                <br></br>
                <p>
                    O ODS 10 reconhece que a desigualdade pode ser um obstáculo significativo para o desenvolvimento sustentável, e visa promover a igualdade de oportunidades e o acesso a recursos para todos, independentemente de sua origem, condição socioeconômica, gênero, idade ou qualquer outra característica.
                </p>
                <br></br>
                <p>
                   <b>Algumas das áreas de foco do ODS 10 incluem:</b> 
                </p>
                <br></br>
                <ul>
                    <li>Redução da desigualdade de renda</li>
                    <li>Promoção de políticas inclusivas</li>
                    <li>Proteção dos direitos dos migrantes e refugiados</li>
                    <li>Aumento da representação política e econômica</li>
                    <li>Investimento em serviços básicos e infraestrutura</li>
                </ul>
                <br></br>
                <p>
                    A redução das desigualdades é fundamental para alcançar um desenvolvimento sustentável e garantir que todas as pessoas possam desfrutar de uma vida digna e próspera. Ao promover a igualdade de oportunidades e o acesso equitativo a recursos, o ODS 10 contribui para a construção de sociedades mais justas, pacíficas e inclusivas.
                </p>
                </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Ods