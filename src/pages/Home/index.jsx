import Header from '../../components/Header'
import Footer from '../../components/Footer'


function Home() {
    return (
        <>
            <Header />
            <section className='container'>
                <div className='conteudo'>
                    <div className='imagem'>
                    <img src='/Ods.jpg' alt='Imagem' />
                    </div>
                    <div className='texto'>
                    <h2>O que são os Objetivos de Desenvolvimento Sustentável?</h2>
                    <p>Os Objetivos de Desenvolvimento Sustentável (ODS) são uma agenda mundial adotada durante a Cúpula das Nações Unidas sobre o 
                        Desenvolvimento Sustentável em setembro de 2015 composta por 17 objetivos e 169 metas a serem atingidos até 2030.
                    </p>
                    <br></br>
                    <p>
                    Nesta agenda estão previstas ações mundiais nas áreas de erradicação da pobreza, segurança alimentar, agricultura, saúde, educação, igualdade de gênero, redução das desigualdades, energia, água e saneamento, padrões sustentáveis de produção e de consumo, mudança do clima, cidades sustentáveis, proteção e uso 
                    sustentável dos oceanos e dos ecossistemas terrestres, crescimento econômico inclusivo, infraestrutura, industrialização, entre outros.
                    </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home