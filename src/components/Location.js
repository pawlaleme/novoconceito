import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Location = () => {
    // Define breakpoints para diferentes tamanhos de tela
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    return (
        <section id="localizacao" className="bg-gray-100" style={{ marginTop: '0', padding: isTabletOrMobile ? '0rem' : '5rem' }}>
            <h2 className="text-2xl text-center font-bold mb-4">Localização</h2>
            <div className="bg-white p-4 text-center rounded-lg shadow-lg">
                <p>Estamos localizados na Rua São Francisco, 123, Centro, Capela do Alto - SP. <br></br> Venha nos visitar!</p>
                {/* Ajuste o tamanho do iframe com base no dispositivo */}
                {isDesktopOrLaptop && (
                    <iframe
                        className="w-full h-96 mt-4" // Para desktop e laptop, altura maior
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.7223129822173!2d-47.73726202542565!3d-23.470478958258195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5e973d99e978d%3A0x554ab2ddcd01ad0d!2sNovo%20Conceito%20Moveis%20e%20Decora%C3%A7%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1722658723389!5m2!1spt-BR!2sbr"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                )}
                {isTabletOrMobile && (
                    <iframe
                        className="w-full h-80 mt-4" // Para tablet e mobile, altura maior para melhor visualização
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.7223129822173!2d-47.73726202542565!3d-23.470478958258195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5e973d99e978d%3A0x554ab2ddcd01ad0d!2sNovo%20Conceito%20Moveis%20e%20Decora%C3%A7%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1722658723389!5m2!1spt-BR!2sbr"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                )}
            </div>
        </section>
    );
};

export default Location;
