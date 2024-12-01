import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Criar a mensagem formatada para o WhatsApp
        const encodedMessage = encodeURIComponent(
            `Nome: ${formData.name}\nE-mail: ${formData.email}\nMensagem: ${formData.message}`
        );

        // Número do WhatsApp e URL
        const whatsappNumber = '15997764058';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Redirecionar para o WhatsApp
        window.open(whatsappURL, '_blank');
    };

    return (
        <section
            id="contato"
            className="bg-gray-100 text-center"
            style={{
                marginTop: isTabletOrMobile ? '0' : '-5rem',  // Ajuste do marginTop baseado no dispositivo
                padding: isTabletOrMobile ? '1.5rem' : '3rem',  // Padding ajustado para dispositivos móveis
            }}
        >
            <h2 className="text-3xl font-bold mb-4">Contato</h2>
            <p className="mb-4 md:text-center text-center">
                Entre em contato pelo formulário abaixo e descubra nossos preços imperdíveis para os móveis dos seus sonhos! Transforme sua casa em um lugar único.
            </p>
            <form onSubmit={handleSubmit} className={isTabletOrMobile ? 'max-w-sm mx-auto' : 'max-w-lg mx-auto'}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                        E-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                        Mensagem
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
