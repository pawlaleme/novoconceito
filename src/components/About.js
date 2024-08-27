import React from 'react';

const About = () => (
    <section
        id="sobre"
        style={{
            backgroundImage: "url('bg.jpg')", // Substitua pelo caminho da sua imagem
            backgroundSize: 'cover', // Faz com que a imagem cubra todo o fundo
            backgroundPosition: 'center', // Centraliza a imagem
            minHeight: '20vh', // Garante que a seção ocupe toda a altura da viewport
            padding: '2rem', // Ajuste o padding conforme necessário
            color: '#4a4a4a' // Cor padrão do texto
        }}
    >
        <h2 className="text-5xl font-extralight mb-4 text-yellow-600">
            NOVO CONCEITO MOVEIS & DECORAÇÕES
        </h2>
        <div className="flex flex-col lg:flex-row gap-2">
            <div className="mt-8 md:mt-0 md:ml-8 md:w-1/2">
                <p style={{
                    textAlign: 'left',
                    padding: '10px',
                    lineHeight: '1.6',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)' // Fundo branco semi-transparente para o texto
                }}>
                    Situada em Capela do Alto, SP, é sinônimo de sofisticação e qualidade no mercado de móveis. Com um portfólio que combina elegância e funcionalidade, a loja se destaca por oferecer uma ampla gama de produtos que atendem aos mais exigentes padrões de design. Cada peça é cuidadosamente selecionada para proporcionar não apenas estética, mas também durabilidade e conforto. O atendimento personalizado e o compromisso com a excelência são marcas registradas da Novo Conceito, garantindo que cada cliente encontre soluções que se ajustem perfeitamente ao seu estilo e necessidades. Um verdadeiro destino para quem busca transformar ambientes com móveis que aliam beleza e praticidade, refletindo um conceito inovador e refinado.
                </p>
            </div>
            <div className="flex-1">
                <img
                    src="abs.png"
                    alt="Showroom Vertical"
                    loading="lazy"
                    className="w-70 h-auto object-cover"
                />
                <p style={{ color: '#daa520' }}> _________________________________________________________</p>
            </div>
        </div>
    </section>
);

export default About;
