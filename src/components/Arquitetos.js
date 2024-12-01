import React, { useState, useEffect } from 'react';

const Arquitetos = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Detectar se a tela é menor (mobile)
  const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;

  const openModal = () => {
    if (isSmallScreen) {
      // Abrir em nova aba para telas menores
      window.open('/proposta-arquitetos.pdf', '_blank');
    } else {
      // Abrir modal em telas maiores
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Gerenciar overflow do body
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // Remove o scroll da página
    } else {
      document.body.style.overflow = ''; // Restaura o scroll
    }
    return () => {
      document.body.style.overflow = ''; // Limpeza ao desmontar
    };
  }, [isModalOpen]);

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-2xl bg-white rounded-lg shadow-md p-8 text-center">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6">Proposta de Parceria para Arquitetos</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
          A Novo Conceito Móveis oferece uma oportunidade única para arquitetos ao colaborar na criação
          de espaços elegantes e funcionais. Nossa proposta de parceria inclui suporte completo, seleção
          de móveis de alta qualidade, e comissões atrativas para projetos que utilizem nossos produtos.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Como arquiteto parceiro, você poderá:
        </p>
        <ul className="list-disc list-inside text-left text-gray-700 text-lg leading-relaxed mb-6">
          <li>Receber uma comissão de 10% sobre o valor total da compra dos móveis;</li>
          <li>Receber uma comissão adicional de 3% para clientes indicados;</li>
          <li>Contar com suporte total da nossa equipe em todas as etapas do projeto.</li>
        </ul>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Para mais detalhes, consulte o documento completo.
        </p>
        <button
          onClick={openModal}
          className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-yellow-600 transition"
        >
          Visualizar Proposta Completa
        </button>

        {/* Modal para telas maiores */}
        {!isSmallScreen && isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-hidden">
              {/* Cabeçalho do Modal */}
              <div className="flex justify-between items-center bg-gray-100 px-4 py-2 border-b">
                <h2 className="text-xl font-bold text-gray-800">Proposta de Parceria</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  ✖
                </button>
              </div>
              {/* Conteúdo do Modal */}
              <div className="p-4">
                <iframe
                  src="/proposta-arquitetos.pdf"
                  width="100%"
                  height="500px"
                  className="border rounded"
                  title="Proposta de Parceria"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Arquitetos;
