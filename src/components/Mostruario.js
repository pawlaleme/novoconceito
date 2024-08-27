import React from 'react';
import '../styles.css'; // Certifique-se de que o caminho está correto para o seu arquivo CSS


const MostWantedProducts = () => {

    const handleWhatsAppRedirect = (product) => {
        const encodedMessage = encodeURIComponent(
            `Olá, estou interessado no produto: ${product}. Gostaria de saber mais detalhes.`
        );

        const whatsappNumber = '15997764058';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
    };

    return (
        <section id="most-wanted-products" className="w-full p-8 bg-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
                
                {/* Coluna dos Produtos com Lista */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-8 text-yellow-600">Nossos produtos</h2>
                    <div className="space-y-4">
                        {/* Produto 1 */}
                        <div className="flex items-center space-x-4">
                            <div className="zoom-container">
                                <img
                                    src="/noronha.jpg" // Substitua pelo caminho correto da imagem
                                    alt="Noronha"
                                    className="img-custom"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold">NORONHA</h3>
                                <p>Estrutura em alumínio, corda náutica redonda 6mm, tecido quaker, madeira teca</p>
                                <button 
                                    onClick={() => handleWhatsAppRedirect('NORONHA')} 
                                    className="text-yellow-500 font-semibold mt-2"
                                >
                                    Compre agora
                                </button>
                            </div>
                        </div>
                        
                        {/* Produto 2 */}
                        <div className="flex items-center space-x-4">
                            <div className="zoom-container">
                                <img
                                    src="/allegra.png" // Substitua pelo caminho correto da imagem
                                    alt="Poltrona Allegra"
                                    className="img-custom"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold">ALLEGRA</h3>
                                <p>Estrutura em alumínio, tricô náutico 37mm com enchimento em polietileno, tecido quaker</p>
                                <button 
                                    onClick={() => handleWhatsAppRedirect('ALLEGRA')} 
                                    className="text-yellow-500 font-semibold mt-2"
                                >
                                    Compre agora
                                </button>
                            </div>
                        </div>
                        
                        {/* Produto 3 */}
                        <div className="flex items-center space-x-4">
                            <div className="zoom-container">
                                <img
                                    src="/oslo.png" // Substitua pelo caminho correto da imagem
                                    alt="Balanço Oslo"
                                    className="img-custom"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold">OSLO</h3>
                                <p>Estrutura em alumínio, corda náutica 12mm ou tricõ náutico 15mm, tecido quaker</p>
                                <button 
                                    onClick={() => handleWhatsAppRedirect('OSLO')} 
                                    className="text-yellow-500 font-semibold mt-2"
                                >
                                    Compre agora
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Coluna do Produto em Destaque */}
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <div className="bg-gray-100 p-6 rounded-lg text-center shadow-lg" style={{ maxWidth: '300px' }}>
                        <p className="text-gray-500 uppercase">MESA LATERAL</p>
                        <h4 className="text-22xl font-bold mt-2">DORA</h4>
                        <img
                            src="/mesadora.png" // Substitua pelo caminho correto da imagem
                            alt="Mesa lateral Dora"
                            className="w-48 h-32 mt-4 object-contain" // Ajustando para forma retangular
                        />
                        <p className="text-gray-500 mt-4">Estrutura em painel madeirado flexível e MDF. Tampo orgânico 26mm chanfrado 80°.</p>
                        <button 
                            onClick={() => handleWhatsAppRedirect('MESA LATERAL DORA')} 
                            className="bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-4"
                        >
                            COMPRE AGORA
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MostWantedProducts;
