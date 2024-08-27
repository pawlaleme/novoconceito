import React from 'react';

const Banner = () => {
  const bannerStyle = {
    backgroundImage: 'url(/banner.png)', // imagem bg
    backgroundRepeat: 'no-repeat', // Impede a repetição da imagem de fundo
    backgroundPosition: 'center', // Centraliza a imagem no elemento
  };

  return (
    <section
      className="text-white text-center py-20 bg-[#BDBDBD] slide-in"
      style={bannerStyle}
    >
    </section>
  );
};

export default Banner;
