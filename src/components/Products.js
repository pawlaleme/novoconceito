import React from 'react';
import { useInView } from 'react-intersection-observer'; // Importação correta do hook
import '../styles.css'; // Certifique-se de que o caminho está correto para o seu arquivo CSS

const Products = () => {
    // Referência para os itens da lista
    const { ref: listRef, inView: listInView } = useInView({
        triggerOnce: true, // A animação será acionada apenas uma vez
        threshold: 0.1, // O efeito é ativado quando 10% do elemento está visível
    });

    // Referência para as imagens
    const { ref: imageRef, inView: imageInView } = useInView({
        triggerOnce: true, // A animação será acionada apenas uma vez
        threshold: 0.1, // O efeito é ativado quando 10% do elemento está visível
    });

    return (
        <section
            id="produtos"
            className="w-full p-8 bg-gray-100"
            style={{
                minHeight: '80vh', // Define uma altura mínima para a seção (80% da altura da janela)
                padding: '3rem', // Expande o espaço interno (padding)
                marginTop: '-4rem',
            }}
        >
            <div className="flex flex-col md:flex-row items-center justify-between .image-lista2">
                {/* Coluna das Imagens */}
                <div className="flex flex-wrap justify-center md:w-1/2 space-x-4 space-y-4">
                    <div
                        className={`flex-shrink-0 w-60 h-60 relative fade-up ${imageInView ? 'visible' : ''}`}
                        ref={imageRef}
                    >
                        <img
                            src="/tapetess.webp" // Substitua pelo caminho correto da imagem
                            alt="Cadeira Estofada"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div
                        className={`flex-shrink-0 w-60 h-60 relative fade-up ${imageInView ? 'visible' : ''}`}
                        ref={imageRef}
                    >
                        <img
                            src="/poltrona.jpg" // Substitua pelo caminho correto da imagem
                            alt="Poltrona Clássica"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div
                        className={`flex-shrink-0 w-60 h-60 relative fade-up ${imageInView ? 'visible' : ''}`}
                        ref={imageRef}
                    >
                        <img
                            src="/ambiente.webp" // Substitua pelo caminho correto da imagem
                            alt="Sofá Retrátil"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Coluna da Lista de Prós */}
                <div className="mt-8 md:mt-0 md:ml-8 md:w-1/2">
                    <h2 className="text-3xl font-thin mb-4 text-yellow-600">
                        Aqui você encontra os melhores móveis e os melhores preços do mercado!
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Nossa seleção é cuidadosamente curada para oferecer apenas o que há de melhor em qualidade e design. Cada peça é escolhida com base em sua durabilidade, estética e funcionalidade, garantindo que você encontre opções que atendam às suas necessidades e superem suas expectativas. Aproveite as melhores ofertas e transforme seu espaço com móveis que combinam sofisticação e valor.
                    </p>

            

                    <ul
                        className={`space-y-3 text-lg text-gray-800 fade-up ${listInView ? 'visible' : ''}`}
                        ref={listRef}
                    >
                        <li className="flex items-center">
                            <span className="text-yellow-500 mr-2">✔</span>
                            Materiais de Alta Qualidade
                        </li>
                        <li className="flex items-center">
                            <span className="text-yellow-500 mr-2">✔</span>
                            Design Exclusivo
                        </li>
                        <li className="flex items-center">
                            <span className="text-yellow-500 mr-2">✔</span>
                            Personalização
                        </li>
                        <li className="flex items-center">
                            <span className="text-yellow-500 mr-2">✔</span>
                            Tecnologia
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Products;
